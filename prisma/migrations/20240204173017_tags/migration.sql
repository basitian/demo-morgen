-- AlterTable
ALTER TABLE "Demonstration" ADD COLUMN     "categories" TEXT[] DEFAULT ARRAY[]::TEXT[];
