/*
  Warnings:

  - You are about to drop the column `userId` on the `Wishlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[wishlistId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_userId_fkey";

-- DropIndex
DROP INDEX "Wishlist_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "wishlistId" INTEGER;

-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_wishlistId_key" ON "User"("wishlistId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
