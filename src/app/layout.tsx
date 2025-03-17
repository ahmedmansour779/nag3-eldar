import type { Metadata } from "next";
import { metadataHome } from "./meta/metadata";
import "./styles/globals.css";

export const metadata: Metadata = metadataHome;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ar">
      <body >
        {children}
      </body>
    </html>
  );
}
