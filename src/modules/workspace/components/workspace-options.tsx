"use client";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { getPrivateRoute } from "@/config/routes";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/shared/components";

interface WorkspaceOptionsProps {
  workspaceId?: string;
}

/* prettier-ignore */
export const WorkspaceOptions = ({ workspaceId }: WorkspaceOptionsProps) => {
  const router = useRouter();
  const t = useTranslations("workspace.menu-list");
    
  /* get account from url params */
  const params = useParams();
  const account = params.account as string;
  const redirectTo = getPrivateRoute({ route: "EDIT_WORKSPACE", segment: account });

  const handleEditWorkspace = (id: string) => {
    console.log("Editing workspace with ID:", `${redirectTo}/${id}`);
    router.push(`${redirectTo}/${id}`, { scroll: false });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" icon="options" className="text-muted-foreground ml-auto cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="mr-2 w-40 p-1">
        <Button
          variant="ghost"
          icon="edit"
          place="start"
          size="sm"
          onClick={() => handleEditWorkspace(workspaceId as string)}
          className="text-2xs hover:bg-secondary hover:text-secondary-foreground w-full justify-start gap-2"
        >
          {t("edit-workspace")}
        </Button>
      </PopoverContent>
    </Popover>
  );
};
