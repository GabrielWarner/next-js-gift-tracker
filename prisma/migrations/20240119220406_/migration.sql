/*
  Warnings:

  - You are about to drop the column `wishlistId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Gift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wishlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_userId_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_wishlistId_fkey";

-- DropIndex
DROP INDEX "User_wishlistId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "wishlistId";

-- DropTable
DROP TABLE "Gift";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Wishlist";
