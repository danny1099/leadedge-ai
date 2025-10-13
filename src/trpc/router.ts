import { procedure, router } from "@/trpc/init";
import { authRouter } from "@/modules/auth/router";
import { workspaceRouter } from "@/modules/workspace/router";

export const appRouter = router({
  health: procedure.query(() => "Oh yeah!!, the server is up and running with TRPC 🚀"),
  auth: authRouter,
  workspace: workspaceRouter,
});

export type AppRouter = typeof appRouter;
