import { getTranslations } from "next-intl/server";
import { Heading, P } from "@/shared/components";
import { EditWorkspaceForm } from "@/modules/workspace/components";
import { trpc } from "@/trpc/server";

interface EditWorkspaceProps {
  params: Promise<{ id: string }>;
}

export default async function EditWorkspace({ params }: EditWorkspaceProps) {
  const t = await getTranslations("workspace");
  const { id } = await params;

  /* get workspace by id from api */
  const { result: workspace } = await trpc.workspace.getWorkspaceById({ id });

  if (!workspace) return null;

  return (
    <section className="flex size-full flex-col px-4 md:px-12">
      <div className="flex h-fit w-full flex-col">
        <Heading>{t("title")}</Heading>
        <P>{t("description")}</P>
      </div>
      <EditWorkspaceForm {...workspace} />
    </section>
  );
}
