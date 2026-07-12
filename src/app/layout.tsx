import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soul Atlas | MCR",
  description:
    "Navigate the Universe of Souls. MCR is a resonance platform that visualizes people, data, and relationships as a universe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
