import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
    providers: [
        GoogleProvider({ clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async signIn({ profile }) {
            return true
        },
        async session({ session }) {
            return session;
        }
    }
});


export { handler as GET, handler as POST };


