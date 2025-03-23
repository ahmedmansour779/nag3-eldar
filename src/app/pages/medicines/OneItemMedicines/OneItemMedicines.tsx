import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type OneItemMedicinesProps = {
  image: StaticImageData;
  name: string;
  description: string;
  use: string;
  count: number;
  id: number
};

export function OneItemMedicines({ image, count, description, name, use, id }: OneItemMedicinesProps) {
  return (
    <div className="w-full p-1 text-right flex items-end flex-col gap-3">
      <Link href={"/medicines/" + id} className="w-full">
        <Image
          alt="شباب نجع الدار"
          title="شباب نجع الدار"
          src={image}
          placeholder="blur"
          className="h-40 w-full rounded-3xl"
        />
      </Link>
      <div className="w-full flex flex-row-reverse justify-between">
        <div>
          <p className="text-lg font-medium">{name}</p>
          <p className="text-sm">
            {description.length > 50 ? description.slice(0, 50) + "..." : description}
          </p>
          <p className="text-sm font-light">{use}</p>
        </div>
        <p className="text-sm">
          {"متوفر" + " " + count}
        </p>
      </div>
      <Link
        target="_blank"
        href={`https://wa.me/20155197344?text=محتاج%20الدواء%20${encodeURIComponent(name)}`}
        className="bg-primary w-fit p-2 text-right rounded-2xl text-white hover:bg-secondary transition-all duration-150 px-3">
        طلب
      </Link>
    </div>
  );
}
