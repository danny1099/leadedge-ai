/*
  Warnings:

  - The values [BUSINESS,EDUCATION,NONPROFIT] on the enum `WorkspaceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WorkspaceType_new" AS ENUM ('business', 'education', 'nonprofit');
ALTER TABLE "public"."Workspaces" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Workspaces" ALTER COLUMN "type" TYPE "WorkspaceType_new" USING ("type"::text::"WorkspaceType_new");
ALTER TYPE "WorkspaceType" RENAME TO "WorkspaceType_old";
ALTER TYPE "WorkspaceType_new" RENAME TO "WorkspaceType";
DROP TYPE "public"."WorkspaceType_old";
ALTER TABLE "Workspaces" ALTER COLUMN "type" SET DEFAULT 'education';
COMMIT;

-- AlterTable
ALTER TABLE "Workspaces" ALTER COLUMN "type" SET DEFAULT 'education';
