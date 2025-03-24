import { linksHeader } from "@/app/data/home/linksHeader";
import srcImage from "@/shared/images/logo.png";
import Image from "next/image";
import Link from "next/link";

type HeaderHeroProps = {
  show: boolean
};

export function HeaderHero({ show }: HeaderHeroProps) {
  return (
    <header className={`${show ? "hidden" : "block"} top-0 left-1/2 -translate-x-1/2 absolute container mx-auto flex justify-between items-center px-4`}>
      <div className="flex gap-4">
        {
          linksHeader.map(({ title, url }, index) => {
            return (
              <Link href={url} key={index} className="text-lg text-fourth hover:text-primary transition-all duration-150">
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
          className="sm:h-28 h-20 w-fit"
        />
      </Link>
    </header>
  );
}
