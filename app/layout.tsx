import type { Metadata } from "next";

import "./globals.css";
import { nekst } from "@/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/size.config";

export const metadata: Metadata = {
  title: {
    template: `%s • ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icons.icon,
    shortcut: siteConfig.icons.shortcut,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex flex-1 flex-col antialiased", nekst.className)}>
        {children}
      </body>
    </html>
  );
}
