import { getTranslations } from "next-intl/server";
import { Heading, P } from "@/shared/components";
import { NewWorkspaceForm } from "@/modules/workspace/components";

export default async function NewWorkspace() {
  const t = await getTranslations("workspace");

  return (
    <section className="flex size-full flex-col px-4 md:px-12">
      <div className="flex h-fit w-full flex-col">
        <Heading>{t("title")}</Heading>
        <P>{t("description")}</P>
      </div>
      <NewWorkspaceForm />
    </section>
  );
}
