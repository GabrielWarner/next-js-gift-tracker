'use server'

import { PrismaClient } from '@prisma/client'
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from '../../../auth';

const prisma = new PrismaClient();

const addPersonFormSchema = z.object({
    name: z.string(),
    birthday: z.coerce.date(),
    imageUrl: z.coerce.string().optional(),
  });

const addUserGiftForm = z.object({
    name: z.string(),
    price: z.coerce.number(),
    url: z.string().optional(),
    imageUrl: z.coerce.string().optional(),
});

// Function to add a person to a User
export async function addPersonToUser(formData: FormData) {
    const session = await auth()
    const userId = session?.userId

    // Ensure userId is a string
    if (typeof userId !== 'string') {
        throw new Error('Invalid user ID: User ID must be a string');
    }
    
    const { name, birthday, imageUrl } = addPersonFormSchema.parse({
        name: formData.get('name'),
        birthday: formData.get('birthday'),
        imageUrl: formData.get('image'),
      });

    try {
        // Create a new wishlist for the person
        const newWishlist = await prisma.wishlist.create({
            data: {},
        });

        // Create a new person linked to the user and their new wishlist
        const newPerson = await prisma.person.create({
            data: {
                name: name,
                birthday: birthday,
                imageUrl: imageUrl,
                userId: userId,
                wishlistId: newWishlist.id,
            },
        });
        revalidatePath('/people/add');
        redirect('/people');
    } catch (error) {
        console.error("Error adding a new person:", error);
        throw error;
    }
}

// TODO: Function to add a gift to a Users Wishlist
// requires userId
export async function  addGiftToUserWishlist(formData: FormData) {
    const session = await auth()
    const wishlistId = session?.userWishlistId

    // Ensure userId is a string
    if (typeof wishlistId !== 'string') {
        throw new Error('Invalid user ID: User ID must be a string');
    }

    const { name, price, url, imageUrl } = addUserGiftForm.parse({
        name: formData.get('name'),
        price: formData.get('price'),
        url: formData.get('url'),
        imageUrl: formData.get('image')
        });

    
    try {
        const gift = await prisma.gift.create({
            data: {
                name: name,
                price: price,
                wishlistId: wishlistId,
                url: url,
                imageUrl: imageUrl
            }  
        })
        revalidatePath('/wishlist');
        redirect('/wishlist');
    } catch (error) {
        console.error("Error adding gift to wishlist:", error);
        throw error;
    }
}

// TODO: Function to add gift to Person
// Requires personId and giftId
export async function addGiftToPersonWishlist (id: string, formData: FormData) {
    try {
        // Find the person's wishlist
        const personWithWishlist = await prisma.person.findUnique({
            where: {
                id: id
            },
            include: {
                wishlist: true
            }
        });

        if (!personWithWishlist || !personWithWishlist.wishlist) {
            throw new Error("Wishlist not found for the person");
        }

        const { name, price, url, imageUrl } = addUserGiftForm.parse({
            name: formData.get('name'),
            price: formData.get('price'),
            url: formData.get('url'),
            imageUrl: formData.get('image')
            });

        // Create a new gift linked to the person's wishlist
        const gift = await prisma.gift.create({
            data: {
                name: name,
                price: price,
                url: url,
                imageUrl: imageUrl,
                wishlistId: personWithWishlist.wishlist.id
            }
        });

        console.log("Gift added to wishlist:", gift);
        console.log(gift)
        revalidatePath(`/people/${id}/add`);
        redirect(`/people/${id}`);
    } catch (error) {
        console.error("Error adding gift to person:", error);
        throw error;
    }
}

// TODO: Function to delete a person
// requires personId
export async function deletePerson ( id: string ) {
    try {
        const gift = await prisma.person.delete({
            where: {
                id: id
            } 
        })
        revalidatePath('/people');
    } catch (error) {
        console.error("Error deleting person from database:", error);
        throw error;
    }
}

// TODO: Function to edit a users gift on their wishlist
// requires userId and giftId
export async function editUserGift () {

}

// TODO: Function to update a persons gift
// Requires personId and giftId
export async function editPersonGift () {

}
