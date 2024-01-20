import NextAuth, { type Session, type User } from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient, User as PrismaUser } from "@prisma/client"

const prisma = new PrismaClient()

declare module "next-auth" {
    interface Session {
      userId: string | undefined
    }
  }

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })],
  callbacks: {
    async session({ session, user }: { session: Session; user?: User }) {
        if (user) {
            session.userId = user.id
          }
        return session
    },
  }
})