import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })],
  callbacks: {
    async session({ session, user }) {
        session.userId = user.id
        return session
    },
  }
//   pages: {
//     signIn: '/signin',
//     signOut: '/signout',
//     error: '/h/error', // Error code passed in query string as ?error=
//   }
})