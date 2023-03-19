/*
  Warnings:

  - Added the required column `whatsapp_link` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "links" ADD COLUMN     "whatsapp_link" TEXT NOT NULL;
