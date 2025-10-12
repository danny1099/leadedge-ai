import { getTranslations } from "next-intl/server";
import { Navbar, P, Title } from "@/shared/components";
import { getAuthSession } from "@/modules/auth/helpers";

export default async function Home() {
  const t = await getTranslations("marketing");
  const session = await getAuthSession();

  return (
    <div className="flex h-dvh flex-col">
      <Navbar />
      <main className="flex size-full flex-col items-center justify-center">
        <Title>{t("title")}</Title>
        <P>{t("description")}</P>

        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      </main>
    </div>
  );
}
