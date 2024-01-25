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
export async function  addGiftToUserWishlist() {

}

// TODO: Function to edit a users gift on their wishlist
// requires userId and giftId
export async function editUserGift () {

}

// TODO: Function to add gift to Person
// Requires personId and giftId
export async function addGiftToPersonWishlist () {

}

// TODO: Function to update a persons gift
// Requires personId and giftId
export async function editPersonGift () {

}
