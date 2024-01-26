/*
  Warnings:

  - You are about to drop the column `wishlistId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `Gift` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Wishlist` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_wishlistId_fkey";

-- DropIndex
DROP INDEX "User_wishlistId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "wishlistId";

-- AlterTable
ALTER TABLE "Wishlist" ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Gift_url_key" ON "Gift"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_userId_key" ON "Wishlist"("userId");

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
