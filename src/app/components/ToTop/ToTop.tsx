"use client";

import { ArrowTopIcon } from "@/app/icons/icons";
import { useCallback, useEffect, useState } from "react";

export function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 500) {
      if (!isVisible) setIsVisible(true);
    } else {
      if (isVisible) setIsVisible(false);
    }
  }, [isVisible]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-8 rounded-full bg-primary hover:bg-secondary transition-all duration-300 p-2 hover:cursor-pointer text-white ${isVisible ? "right-8" : "-right-16"}`}
      onClick={() => scrollToTop()}
    >
      <ArrowTopIcon />
    </div>
  );
}
