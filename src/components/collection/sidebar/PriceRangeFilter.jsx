"use client";
import ReactSlider from "react-slider";
import { useEcommerce } from "@/context/EcommerceContext"; // Adjust the import path if necessary
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import FilterHeader from "./FilterHeader"; // Import FilterHeader component

const PriceRangeFilter = () => {
  const { minValue, setMinValue, maxValue, setMaxValue } = useEcommerce();
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const handleChange = ([min, max]) => {
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <>
      {/* Filter header with toggle */}
      <FilterHeader
        title="Price"
        className="cursor-pointer"
        onClick={() => setIsPriceOpen(!isPriceOpen)}
      >
        {isPriceOpen ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </FilterHeader>
      <div className="w-full mx-auto my-6">
        {/* Price range slider that appears only if isPriceOpen is true */}
        {isPriceOpen && (
          <div>
            <ReactSlider
              className="w-full h-2 my-4"
              thumbClassName="h-6 w-6 bg-blue-600 rounded-full cursor-pointer react-slider-thumb"
              trackClassName="bg-gray-300 h-1 react-slider-track"
              defaultValue={[minValue, maxValue]}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              min={0}
              max={1000}
              step={10}
              onChange={handleChange}
            />
            <div className="flex justify-between mt-2">
              <span>Min: {minValue}</span>
              <span>Max: {maxValue}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PriceRangeFilter;
