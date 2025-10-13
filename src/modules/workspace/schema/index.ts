import { z } from "zod";

export const workspaceSchema = z.object({
  name: z.string().nonempty({ message: "required" }).min(3, { message: "invalid_name" }),
  avatar: z.string(),
  type: z.string().nonempty({ message: "required" }),
  status: z.string().nonempty({ message: "required" }),
  description: z.string(),
  organizationId: z.string().nonempty({ message: "required" }),
});

export const workspaceWithId = workspaceSchema.extend({
  id: z.string().nonempty({ message: "required" }),
});

export type WorkspaceSchema = z.infer<typeof workspaceSchema>;
export type WorkspaceWithId = z.infer<typeof workspaceWithId>;
