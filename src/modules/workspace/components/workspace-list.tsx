"use client";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { getPrivateRoute } from "@/config/routes";
import { cn, getColors } from "@/shared/utils";
import { Button, Icon, P } from "@/shared/components";
import { WorkspaceSkeleton, WorkspaceOptions } from "@/modules/workspace/components";
import { trpc } from "@/trpc/client";

/* prettier-ignore */
export const WorkspaceList = () => {
  const router = useRouter();
  const t = useTranslations("workspace.menu-list");
  
  /* get account from url params */
  const params = useParams();
  const account = params.account as string;
  const redirectTo = getPrivateRoute({ route: "WORKSPACES", segment: account });

  /* get all spaces by workspace id selected */
  const { data, isLoading } = trpc.workspace.getAllWorkspaces.useQuery();

  const handleWorkspaceChange = (param: string) => {
    router.push(`${redirectTo}/${param}`, { scroll: false });
  };

  /* handle loading skeleton if data is not available */
  if (isLoading) return <WorkspaceSkeleton />;

  const { result: workspaces } = data??{};

  return (
    <div className="w-full px-4 py-2 md:px-8 my-auto">
      <div className="bg-secondary flex flex-col rounded-md px-2 py-4">
        <span className="flex items-center justify-between">
          <P className="text-2xs text-foreground ml-1 font-medium">{t("title")}</P>
          <Button size="tiny" variant="in-line" icon="add" onClick={() => handleWorkspaceChange("create-workspace")} className="mr-1" />
        </span>
        <p className="text-3xs text-foreground-muted ml-1">{t("subtitle")}</p>

        <ul className="border-border-muted mx-4 mt-3 flex h-fit max-h-36 min-h-8 min-w-0.5 translate-x-px flex-col gap-1 overflow-y-auto border-l px-2 py-1">
          {workspaces?.map(({id, name, color}) => {
            return (
              <li key={id} className="hover:bg-accent inline-flex h-7 w-full cursor-pointer items-center gap-1 rounded-sm px-1">
                <div onClick={() => handleWorkspaceChange(id)} className="flex w-full items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-xs">
                    <Icon name="square" className={cn("text-primary size-1.5", getColors(color).text)} />
                  </div>
                  <span className="text-foreground text-2xs">{name}</span>
                </div>
                <WorkspaceOptions workspaceId={id} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
