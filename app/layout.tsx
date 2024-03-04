import type { Metadata } from "next";
import BaseLayout from "@/components/base-layout";
import Image from '../public/header.jpg';

export const metadata: Metadata = {
  title: "Antique Manga",
  description: "Antique Manga Scanlator. Manga, Manhwa, Doujinshi, Novel, One Shot, entre outros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout image={Image}>
      {children}
    </BaseLayout>
  );
}
