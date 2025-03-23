"use client";
import { linksHeader } from "@/app/data/home/linksHeader";
import srcImage from "@/shared/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed bg-fourth w-full ${show ? "top-0" : "-top-20"} z-30 transition-all duration-300`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-4">
          {
            linksHeader.map(({ title, url }, index) => {
              return (
                <Link href={url} key={index} className="text-lg text-primary hover:text-secondary transition-all duration-150">
                  {title}
                </Link>
              )
            })
          }
        </div>
        <Link href="/">
          <Image
            alt="شباب نجع الدار"
            title="شباب نجع الدار"
            src={srcImage}
            placeholder="blur"
            className="h-20 w-fit"
          />
        </Link>
      </div>
    </header>
  );
}
