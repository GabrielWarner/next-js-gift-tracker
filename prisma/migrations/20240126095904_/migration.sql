/*
  Warnings:

  - The primary key for the `Wishlist` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_wishlistId_fkey";

-- AlterTable
ALTER TABLE "Gift" ALTER COLUMN "wishlistId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "wishlistId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "wishlistId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Wishlist_id_seq";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
