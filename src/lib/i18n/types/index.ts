import type { LangEn, routing } from "@/lib/i18n/core";

declare module "next-intl" {
  interface AppConfig {
    Messages: LangEn;
    Locale: (typeof routing.locales)[number];
  }
}
