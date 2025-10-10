import { getTranslations } from "next-intl/server";
import { Title, P } from "@/shared/components";
import { FormRegister } from "@/modules/auth/components";

export default async function GetStarted() {
  const t = await getTranslations("get_started");

  return (
    <section className="flex size-full flex-col items-center py-5">
      <div className="flex h-fit flex-col px-4 text-left md:-ml-5">
        <Title>{t("title")}</Title>
        <P>{t("description")}</P>
      </div>
      <FormRegister />
    </section>
  );
}
