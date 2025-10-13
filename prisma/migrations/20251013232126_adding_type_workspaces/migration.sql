/*
  Warnings:

  - The `type` column on the `Workspaces` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Workspaces" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'education';

-- DropEnum
DROP TYPE "public"."WorkspaceType";
