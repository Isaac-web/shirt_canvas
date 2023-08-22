import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@utils/db";
import User from "@models/User";
import { verifyPassword } from "@utils/crypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: { type: "text", placeholder: "email" },
        password: { type: "password", placeholder: "password" },
      },
      async authorize(credentials, req) {
        connectToDb();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;

          delete user?.password;
          console.log(user);

          return true;
        } catch (error) {
          console.error(error);

          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async signIn({ profile }) {
      connectToDb();

      try {
        let user = await User.findOne({ email: profile.email });
        if (!user) {
          user = User.create({
            name: profile.name,
            email: profile.email,
            imageUrl: profile.image,
          });

          const admin = await User.findOne();
          if (!admin) user.isAdmin = true;

          await user.save();
        }
        return true;
      } catch (err) {
        return false;
      }
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      session.user._id = user._id;

      return session;
    },
  },
  pages: {
    signIn: "/auth/signIn",
  },
});

export { handler as GET, handler as POST };
