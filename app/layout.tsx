// xnglo-fontpicker-template/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import {
  hindixv38font,
  bengalixb38font,
  eNgliSxe38font,
  guzrajixg38font,
  jeluguxj38font,
  knRaxk38font,
  mlyalxmxm38font,
  oriyaxo38font,
  pnzabixp38font,
  sinhlaxs38font,
  tmilxt38font,
} from "@/components/hsciifp/varfonts";
import LocalFontPicker from "@/components/hsciifp/LocalFontPicker";
import MicButton from "@/components/hsciifp/MicButton";

export const metadata: Metadata = {
  title: "xNglo School",
  description: "School app with xi38 fonts, Python, DBMS, AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hindixv38font.variable} ${bengalixb38font.variable} ${eNgliSxe38font.variable} ${guzrajixg38font.variable} ${jeluguxj38font.variable} ${knRaxk38font.variable} ${mlyalxmxm38font.variable} ${oriyaxo38font.variable} ${pnzabixp38font.variable} ${sinhlaxs38font.variable} ${tmilxt38font.variable}`}
    >
      <head />
      <body className="bg-gray-50 min-h-screen">
        <header className="flex gap-4 p-4 bg-white border-b shadow-sm items-center">
          <Link href="/" className="font-bold text-xl">xNglo School</Link>
          <LocalFontPicker />
          <MicButton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
