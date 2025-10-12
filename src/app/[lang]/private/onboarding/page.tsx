import { getTranslations } from "next-intl/server";
import { P, Navbar, Title } from "@/shared/components";

export default async function Onboarding() {
  const t = await getTranslations("onboarding");

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <main className="bg-background flex size-full flex-col items-center gap-2 px-4 py-6 md:px-24">
        <div className="mt-10 flex h-fit w-full flex-col text-center">
          <Title>{t("title")}</Title>
          <P className="-mt-0.5 line-clamp-2">{t("description")}</P>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Onboarding | LeadEdge AI",
  description: "Welcome to your LeadEdge AI journey, let’s get started by creating your key account.",
};
