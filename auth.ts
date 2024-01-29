import NextAuth, { type Session, type User } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AdapterUser } from "@auth/core/adapters";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    userId: string | undefined;
    userWishlistId: string | null;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    wishlistId: string | null
  }
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // include userId and wishlistId with session
    async session({ session, user }: { session: Session; user?: AdapterUser }) {
      if (user) {
        session.userId = user.id;
        session.userWishlistId = user.wishlistId
      }
      return session;
    },
    // redirects user to home page after successful sign ind
    async redirect({ url, baseUrl }) {
      return baseUrl + '/home'
    },
  },
  events: {
    // event to create and connect Wishlist object to new User
    createUser:async ( message: { user: User }) => {
      console.log(message.user)
      console.log('creating wishlist')
      if(!message.user.id){
        throw new Error('User ID not found!');
      }
        await prisma.wishlist.create({
          data: {
            user: {
              connect: { id: message.user.id }
            }
          }
        })
    }
  }
});

