/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { metadataHome } from "./meta/metadata";
import "./styles/globals.css";

export const metadata: Metadata = metadataHome;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ar">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
