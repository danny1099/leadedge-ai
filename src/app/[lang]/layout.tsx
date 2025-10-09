import type { Metadata } from "next";
import { globalFont } from "@/config/fonts";
import "@/globals.css";

interface RootLayoutProps extends Children {
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${globalFont.className} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "LeadEdge | Leadership Simulator",
  description:
    "An advanced leadership simulator that develops strategic skills through realistic dilemmas involving limited resources, role rotation, and high-impact collaborative decisions.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/app-logo.svg",
        href: "/images/app-logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/app-logo_dark.svg",
        href: "/images/app-logo_dark.svg",
      },
    ],
  },
};
