import FilterHeader from "./FilterHeader";
import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import DressStyleFilter from "./DressStyleFilter";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="bg-white border pt-5 border-x-gray-300 border-solid px-4 w-64">
      <div className={`flex items-center justify-between my-4`}>
        <h2 className="text-xl font-semibold">Filter</h2>
        <div>
          <AdjustmentsVerticalIcon className="w-6 h-6" />
        </div>
      </div>
      <hr />
      <CategoryFilter />
      <hr />

      <PriceRangeFilter />
      <hr />

      <ColorFilter />
      <hr />

      <SizeFilter />
      <hr />

      <DressStyleFilter />
    </aside>
  );
}
