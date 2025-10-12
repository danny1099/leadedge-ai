import { getTranslations } from "next-intl/server";
import { Navbar, P, Title } from "@/shared/components";

export default async function Home() {
  const t = await getTranslations("marketing");

  return (
    <div className="flex h-dvh flex-col">
      <Navbar />
      <main className="flex size-full flex-col items-center justify-center">
        <Title>{t("title")}</Title>
        <P>{t("description")}</P>
      </main>
    </div>
  );
}
