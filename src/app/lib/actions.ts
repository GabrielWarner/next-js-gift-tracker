'use server'

import { PrismaClient } from '@prisma/client'
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

const addPersonFormSchema = z.object({
    name: z.string(),
    birthday: z.coerce.date(),
    imageUrl: z.coerce.string().optional(),
  });

// When a user signs up with AuthO we create a new user in the database using their name and email
// We can then use the users email to fetch the User data, extract the userId and then use that to add a person

export async function AddPerson(userId: string, formData: FormData) {
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