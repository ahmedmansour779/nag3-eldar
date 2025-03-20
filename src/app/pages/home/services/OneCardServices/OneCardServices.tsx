import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type OneCardServicesProps = {
  image: StaticImageData,
  title: string,
  description: string,
  url: string
};

export function OneCardServices({ description, image, title, url }: OneCardServicesProps) {
  return (
    <div className="bg-third flex-1/2 flex flex-col gap-4 text-right items-end rounded-3xl overflow-hidden">
      <Image
        alt={title}
        src={image}
        title={title}
        className="h-96 rounded-3xl"
      />
      <div className="w-full p-4 flex flex-col gap-2">
        <p className="text-4xl">
          {title}
        </p>
        <p>
          {description}
        </p>
      </div>
      <Link href={url} className="mr-4 mb-4 px-4 py-2 bg-secondary rounded-2xl w-fit text-fourth">
        أستكشف
      </Link>
    </div>
  );
}
