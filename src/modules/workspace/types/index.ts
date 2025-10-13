import type { Workspaces as PrismaWorkspace } from "@prisma/client";

export interface Workspace extends PrismaWorkspace {}

export interface Areas {
  id: string;
  name: string;
  description: string;
}
