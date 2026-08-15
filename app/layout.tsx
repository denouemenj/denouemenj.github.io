import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YTheory — Funding Questions That Move Us Forward",
  description: "YTheory funds bold, underrepresented research ideas with the potential to create a better future.",
  other: { "codex-preview": "development" },
  icons: {
    icon: [{ url: "/ytheory-mark.png", type: "image/png" }],
    shortcut: "/ytheory-mark.png",
    apple: "/ytheory-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
