/*
  Warnings:

  - A unique constraint covering the columns `[ref]` on the table `links` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ref` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "links" ADD COLUMN     "ref" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "links_ref_key" ON "links"("ref");
