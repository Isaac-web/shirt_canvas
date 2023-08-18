import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@utils/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: { type: "text", placeholder: "email" },
        password: { type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        console.log("Email", credentials.email);
        console.log("Password", credentials.password);

        //connect to db
        connectToDb();

        //make api request

        //if the user exists, return the user

        //else return null
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
      return true;
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: "/auth/signIn",
  },
});

export { handler as GET, handler as POST };
