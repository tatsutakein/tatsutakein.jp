import type { Metadata, Viewport } from "next";
import { env } from "@/env";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@tatsutakeinjp/ui";
import { ThemeProvider } from "@tatsutakeinjp/ui/theme";
import { Toaster } from "@tatsutakeinjp/ui/toast";

import "@/app/globals.css";

import type { JSX, ReactNode } from "react";
import { Footer, Header } from "@/app/_components/navigation";

const siteName = env.SITE_NAME;

export const metadata: Metadata = {
  metadataBase: new URL(env.VERCEL_ENV === "production" ? env.SITE_URL : "http://localhost:3000"),
  title: {
    template: `%s — ${siteName}`,
    default: siteName,
  },
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: {
      template: `%s — ${siteName}`,
      default: siteName,
    },
    description: "Simple monorepo with shared backend for web & mobile apps",
    type: "website",
    url: "/",
    siteName: siteName,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    site: "@tatsutakein",
    creator: "@tatsutakein",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: ReactNode }): JSX.Element {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="bg-gray-50 dark:bg-zinc-900">{props.children}</div>
          <Footer />

          {/*<div className="absolute bottom-4 right-4">*/}
          {/*  <ThemeToggle />*/}
          {/*</div>*/}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
