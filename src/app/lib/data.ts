'use server'
import { PrismaClient } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache';
import {
    User,
    Person,
    WishList,
    Gift,
} from '@/app/lib/definitions'

const prisma = new PrismaClient();

export async function fetchUser( id: string | undefined ) {
    // Add noStore() here prevent the response from being cached.
    // Meaning this function is not static
    noStore()
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                persons: true
            }
        });
        return user; // Return the fetched users
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}


export async function fetchUsersPersons( email: string ) {
    // Add noStore() here prevent the response from being cached.
    // Meaning this function is not static
    noStore()
    try {
        const users = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                persons: true
            }
        });
        return users; // Return the fetched users
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

// TODO: Function to fetch a users Wishlist
// requres userId
export async function fetchUserWishlist () {

}

// TODO: Function to fetch a tracked persons gifts
// requires personId
export async function fetchPersoWishlist () {

}

// TODO: Function to fetch a Users Gift from Wishlist
// requires userId and giftId
export async function fetchUserGift () {

}

// TODO: Function to fetch a Persons Gift
// requires personId and giftId
export async function fetchPersonGift () {

}