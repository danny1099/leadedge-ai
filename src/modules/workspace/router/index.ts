import z from "zod";
import { procedure, router } from "@/trpc/init";
import { tryCatch } from "@/shared/utils";
import { workspaceSchema } from "@/modules/workspace/schema";
import type { Workspace } from "@/modules/workspace/types";

/* common parameters for searching data by id */
const parameters = z.object({ id: z.string() });

export const workspaceRouter = router({
  getAllWorkspaces: procedure.query<TRPCResponse<Workspace[]>>(async ({ ctx, input }) => {
    const userId = ctx.user?.id;
    const organizationId = ctx.user?.organizationId;

    /* check if user have a session valid */
    if (!userId) return { result: null, message: "auth/invalid_session", status: "error" };

    /* get all workspace by user id and organization id */
    const { data } = await tryCatch(ctx.db.workspaces.findMany({ where: { organizationId } }));

    return {
      result: data as Workspace[],
      message: null,
      status: "success",
    };
  }),

  getWorkspaceById: procedure.input(parameters).query<TRPCResponse<Workspace>>(async ({ ctx, input }) => {
    const { id } = input;

    /* check if user have a session valid */
    if (!ctx.user?.id) return { result: null, message: "auth/invalid_session", status: "error" };

    /* get all workspace by user id */
    const { data } = await tryCatch(ctx.db.workspaces.findUnique({ where: { id } }));

    return {
      result: data as Workspace,
      message: null,
      status: "success",
    };
  }),

  create: procedure.input(workspaceSchema).mutation<TRPCResponse<Workspace>>(async ({ ctx, input }) => {
    const { name, avatar, type, description, organizationId } = input;
    const [icon, color] = avatar.split("-");

    /* check if user have a session valid */
    if (!ctx.user?.id) return { result: null, message: "auth/invalid_session", status: "error" };

    /* check if workspace already exists with name */
    const workspace = await ctx.db.workspaces.findFirst({ where: { name, AND: { organizationId } } });
    if (workspace) return { result: null, message: "workspace/name_exists", status: "error" };

    const { data, error } = await tryCatch(
      ctx.db.workspaces.create({
        data: {
          name,
          icon,
          color,
          status: "active",
          organizationId,
          userId: ctx.user?.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
    );
    /* handle error if any occurs while creating workspace */
    if (error) return { result: null, message: "workspace/create_failed", status: "error" };

    return {
      result: data as Workspace,
      message: "workspace/create_success",
      status: "success",
    };
  }),
});
