import { itemsMedicines } from "@/app/data/TemporaryData/MedicinesItems";
import { OneItemMedicines } from "../OneItemMedicines";

export function ItemsMedicines() {
  return (
    <div className="container mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 py-4">
      {itemsMedicines.map(({ count, description, image, name, use, id }, index) => {
        return (
          <OneItemMedicines id={id} count={count} description={description} image={image} name={name} use={use} key={index} />
        )
      })}
    </div>
  );
}
