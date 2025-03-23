import { SearchIcon } from "@/app/icons/icons";

export function SearchBarMedicines() {
  return (
    <div className="container mx-auto px-4 flex justify-center py-6">
      <div className="flex items-center gap-4">
        <SearchIcon />
        <input
          type="text"
          placeholder="بحث"
          className="bg-transparent text-right focus:outline-0"
        />
      </div>
    </div>
  );
}
