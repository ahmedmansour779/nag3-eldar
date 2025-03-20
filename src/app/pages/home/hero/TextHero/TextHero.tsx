import { WorldIcon } from "@/app/icons/icons";
import { Dispatch, SetStateAction } from "react";

type TextHeroProps = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
};

export function TextHero({ setShow, show }: TextHeroProps) {
  return (
    <div className={`${show ? "hidden" : "block"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 items-center justify-center text-center`}>
      <p className="text-6xl text-secondary">
        رسالة تعريفية
      </p>
      <p className="text-xl text-fourth">
        من نحن؟ ماذا نقدم؟ وما هدفنا؟
      </p>
      <WorldIcon className="hover:cursor-pointer" onClick={() => setShow(true)} />
    </div>
  );
}
