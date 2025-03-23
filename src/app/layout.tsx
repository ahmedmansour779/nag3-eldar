/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { ToTop } from "./components/ToTop";
import { metadataHome } from "./data/meta/metadata";
import "./styles/globals.css";

export const metadata: Metadata = metadataHome;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ar">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Suspense fallback={<Loader />}>
          <Header />
          {children}
          <Footer />
          <ToTop />
        </Suspense>
      </body>
    </html>
  );
}
