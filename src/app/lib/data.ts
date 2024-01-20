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

export async function getUser( id: string | undefined ) {
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


export async function getUsersPersons( email: string ) {
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
