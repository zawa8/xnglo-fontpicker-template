// xnglo-fontpicker-template/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
  title: "xNglo Font Picker Template",
  description: "Reusable Next.js font picker for xnglo xi38 fonts.",
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
      <body>
        <header className="flex gap-4 p-4">
          <LocalFontPicker />
          <MicButton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}