"use client";
import srcImage from "@/shared/images/hero-bg.jpeg";
import Image from "next/image";
import { useState } from "react";
import { HeaderHero } from "../HeaderHero";
import { TextHero } from "../TextHero";
import { VideoHero } from "../VideoHero";

export function HeroSection() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <section
      className="w-full h-lvh overflow-hidden relative">
      <Image
        alt="imageBackground"
        src={srcImage}
        placeholder="blur"
        quality={100}
        fill
        objectFit="cover"
        className=" w-lvw h-lvh bg-cover bg-no-repeat bg-center bg-fixed"
      />
      <div className={`${show ? "hidden" : "block"} absolute inset-0 bg-black opacity-20 z-0`}></div>
      <HeaderHero show={show} />
      <VideoHero setShow={setShow} show={show} />
      <TextHero show={show} setShow={setShow} />
    </section>
  );
}
