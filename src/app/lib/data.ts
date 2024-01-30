'use server'
import { PrismaClient } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache';
import { auth } from '../../../auth';

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
                people: true
            }
        });
        return user; // Return the fetched users
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}


export async function fetchUsersPersons() {
    // Add noStore() here prevent the response from being cached.
    // Meaning this function is not static
    noStore()
    const session = await auth()
    try {
        const users = await prisma.user.findUnique({
            where: {
                id: session?.userId
            },
            include: {
                people: true
            }
        });
        return users; // Return the fetched users
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

// Function to fetch a users Wishlist
export async function fetchUserWishlist () {
    const session = await auth()
    try{
        const wishlistId = session?.userWishlistId ?? undefined;
        const wishlist = await prisma.wishlist.findUnique({
            where: {
                id: wishlistId
            },
            include: {
                gifts: true
            }
        })
        if (!wishlist) {
            throw new Error('Wishlist not found');
        }

        return wishlist
    } catch (error) {
        console.error("Error fetching gifts:", error);
        throw error;
    }
}

// Function to fetch a tracked persons gifts
// requires personId
export async function fetchPersonGifts ( id: string ) {
    const session = await auth()

    try{
        const personWithWishlist = await prisma.person.findUnique({
            where: {
                id: id,
            },
            include: {
                wishlist: {
                    include: {
                        gifts: true,
                    },
                },
            },
        });

        if (!personWithWishlist || !personWithWishlist.wishlist) {
            throw new Error('Wishlist not found');
        }

        const { wishlist } = personWithWishlist;
        return wishlist
    } catch(error){
        console.error("Error fetching person's wishlist:", error);
        throw error;
    }
}

// TODO: Function to fetch a Users Gift from Wishlist
// requires userId and giftId
export async function fetchUserGift (id: string) {
    try{
        const gift = prisma.gift.findUnique({
            where: {
                id: id,
            }
        })
        return gift
    } catch (error) {
        console.error("Error fetching users's gift:", error);
        throw error;
    }
}

// TODO: Function to fetch a Persons Gift
// requires personId and giftId
export async function fetchPersonGift (id: string) {
    try{
        const gift = prisma.gift.findUnique({
            where: {
                id: id,
            }
        })
        return gift
    } catch (error) {
        console.error("Error fetching person's gift:", error);
        throw error;
    }
}
