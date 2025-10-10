"use client";
import { Route } from "next";
import { useTranslations } from "next-intl";
import { Navlink } from "@/shared/components";

/* prettier-ignore */
export const TermsAndPolicy = () => {
  const t = useTranslations("disclaimer");
  const termsService = "/terms-of-service" as Route;
  const privacyPolicy = "/privacy-policy" as Route;

  return (
    <div className="flex flex-col items-center text-center px-4 md:px-0">
      <p className="text-3xs text-muted-foreground text-pretty line-clamp-1">{t("description")}</p>
      <span className="flex items-center">
        <Navlink href={termsService} variant="ghost" className="text-neutral-400 text-3xs h-fit w-auto p-0 font-medium hover:underline">
          {t("terms-service")}
        </Navlink>
        <p className="text-3xs text-muted-foreground mx-1">{t("and")}</p>
        <Navlink href={privacyPolicy} variant="ghost" className="text-neutral-400 text-3xs h-fit w-auto p-0 font-medium hover:underline">
          {t("privacy-policy")}
        </Navlink>
      </span>
    </div>
  );
};
