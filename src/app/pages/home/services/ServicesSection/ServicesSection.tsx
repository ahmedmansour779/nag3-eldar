import { servicesItems } from "@/app/data/home/servicesItems";
import { OneCardServices } from "../OneCardServices";

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 gap-8 py-12 grid sm:grid-cols-2 grid-cols-1">
      {
        servicesItems.map(({ description, image, title, url }, index) => {
          return (
            <OneCardServices key={index} description={description} image={image} title={title} url={url} />
          )
        })
      }
    </section>
  );
}
