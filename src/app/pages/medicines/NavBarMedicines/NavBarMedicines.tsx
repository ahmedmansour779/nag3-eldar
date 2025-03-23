"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function NavBarMedicines() {
  const pages = Array(5).fill(0);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1"
  return (
    <div className="container mx-auto flex gap-2 justify-center py-4">
      {
        pages.map((_, index) => {
          return (
            <Link href={`?page=${++index}`} key={index} className={`text-primary border-primary ${index == +page && "border-b-[1px]"}`}>
              {index}
            </Link>
          )
        })
      }
    </div>
  );
}
