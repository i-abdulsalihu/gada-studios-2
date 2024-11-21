import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { nekst } from "./fonts";

import "./globals.css";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicons,
    shortcut: siteConfig.shortcut,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-1 flex-col bg-[#0c0c0c] font-neskt antialiased",
          nekst.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
