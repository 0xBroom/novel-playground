import "@/styles/tailwind.css";
import "@/styles/prosemirror.css";

import cx from "classnames";
import { cal, inter } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Toaster from "./toaster";
import { ReactNode } from "react";
import { ClerkProvider } from '@clerk/nextjs'

const title =
  "Novel";
const description =
  "Novel is a Notion-style WYSIWYG editor with AI-powered autocompletions. Built with Tiptap, OpenAI, and Vercel AI SDK.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@0xbroom",
  },
  metadataBase: new URL("https://novel.sh"),
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Toaster />
        <body className={cx(cal.variable, inter.variable)}>{children}</body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
