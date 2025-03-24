import { WorldIcon } from "@/app/icons/icons";
import { Dispatch, SetStateAction } from "react";

type TextHeroProps = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
};

export function TextHero({ setShow, show }: TextHeroProps) {
  return (
    <div className={`${show ? "hidden" : "block"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 items-center justify-center text-center`}>
      <p className="sm:text-6xl text-3xl text-secondary">
        رسالة تعريفية
      </p>
      <p className="sm:text-xl text-sm text-fourth">
        من نحن؟ ماذا نقدم؟ وما هدفنا؟
      </p>
      <WorldIcon className="hover:cursor-pointer sm:w-20 w-14" onClick={() => setShow(true)} />
    </div>
  );
}
