"use client";
import { Icon, P } from "@/shared/components";

/* prettier-ignore */
export const WorkspaceList = () => {
  const data:string[] = ["Workspace 1", "Workspace 2"];

  return (
    <div className="w-full px-4 py-2 md:px-8 my-auto">
      <div className="bg-secondary flex flex-col rounded-md px-2 py-4">
        <P className="text-2xs text-foreground ml-1 font-medium">Workspaces</P>
        <span className="text-3xs text-foreground-muted ml-1">This are your workspaces of your account</span>

        <ul className="border-border-muted mx-4 mt-3 flex h-fit max-h-36 min-h-8 min-w-0.5 translate-x-px flex-col gap-1 overflow-y-auto border-l px-2 py-1">
          {data?.map((ws) => {
            return (
              <li key={ws} className="hover:bg-accent inline-flex h-7 w-full cursor-pointer items-center gap-1 rounded-sm px-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-xs">
                  <Icon name="square" className="text-primary size-1.5" />
                </div>
                <span className="text-foreground text-2xs">{ws}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
