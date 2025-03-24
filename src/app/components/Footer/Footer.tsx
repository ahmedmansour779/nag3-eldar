import { CIcon, FacebookIcon, WhatsappIcon } from "@/app/icons/icons";
import srcImage from "@/shared/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-third text-secondary">
      <div className="container mx-auto px-4 sm:flex justify-between py-4 items-center grid grid-cols-2 grid-rows-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-2">
            <Link href="https://www.facebook.com/profile.php?id=61559455807819" title="facebook-amt">
              <FacebookIcon />
            </Link>
            <Link href="https://wa.me/201019472864" title="whatsapp-amt">
              <WhatsappIcon />
            </Link>
          </div>
          <Link href="https://amt-egypt.vercel.app/" className="flex justify-center items-center gap-1">
            <CIcon />2025 AMT Team
          </Link>
        </div>
        <p className="col-span-2 row-start-1 col-start-1 text-center">
          AMT صنع بحب بواسطة فريق
        </p>
        <Image
          alt="شباب نجع الدار"
          title="شباب نجع الدار"
          src={srcImage}
          placeholder="blur"
          className="h-20 w-fit sm:mx-0 mx-auto"
        />
      </div>
    </footer>
  );
}
