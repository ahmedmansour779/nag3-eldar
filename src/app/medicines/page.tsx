import { HeroMedicines } from "../pages/medicines/HeroMedicines";
import { ItemsMedicines } from "../pages/medicines/ItemsMedicines";
import { NavBarMedicines } from "../pages/medicines/NavBarMedicines";
import { SearchBarMedicines } from "../pages/medicines/SearchBarMedicines";

export default function Medicines() {
    return (
        <div className="bg-fourth">
            <HeroMedicines />
            <SearchBarMedicines />
            <ItemsMedicines />
            <NavBarMedicines />
        </div>
    );
}
