/*
  Warnings:

  - The `wishlistId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Wishlist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Wishlist` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `wishlistId` on the `Gift` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `wishlistId` on the `Person` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_wishlistId_fkey";

-- AlterTable
ALTER TABLE "Gift" DROP COLUMN "wishlistId",
ADD COLUMN     "wishlistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "wishlistId",
ADD COLUMN     "wishlistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "wishlistId",
ADD COLUMN     "wishlistId" INTEGER;

-- AlterTable
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Person_wishlistId_key" ON "Person"("wishlistId");

-- CreateIndex
CREATE UNIQUE INDEX "User_wishlistId_key" ON "User"("wishlistId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
