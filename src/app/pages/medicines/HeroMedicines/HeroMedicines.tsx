import { HeaderHero } from "../../home/hero/HeaderHero";

export function HeroMedicines() {
  return (
    <div className="h-[50vh] relative bg-gradient-to-br from-primary to-[#DFCBA3] flex justify-end items-center text-right">
      <HeaderHero show={false} />
      <div className="container mx-auto px-4 flex flex-col gap-2">
        <p className="text-4xl text-primary">
          بنك الأدوية
        </p>
        <p className="text-fourth">
          .يمكنك طلب الدواء الذي تحتاجه أو التواصل معانا لتوفيره
        </p>
      </div>
    </div>
  );
}
