/*
  Warnings:

  - You are about to drop the column `description` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `name` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Made the column `link` on table `Service` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "description",
DROP COLUMN "title",
DROP COLUMN "type",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "link" SET NOT NULL;
