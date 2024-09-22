"use client";
import { useState } from "react";
import { useEcommerce } from "@/context/EcommerceContext";
import FilterHeader from "./FilterHeader"; // Assuming you have a FilterHeader component
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SizeFilter() {
  const { selectedSizes, setSelectedSizes } = useEcommerce();
  const [isSizeOpen, setIsSizeOpen] = useState(true); // State for collapse

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((prev) => prev.filter((item) => item !== size));
    } else {
      setSelectedSizes((prev) => [...prev, size]);
    }
  };

  return (
    <>
      {/* Filter Header with toggle */}
      <FilterHeader title="Size" onClick={() => setIsSizeOpen(!isSizeOpen)}>
        {isSizeOpen ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </FilterHeader>
      <div className="my-6">
        {/* Collapsible size options */}
        {isSizeOpen && (
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size, index) => (
              <div
                key={index}
                className={`border p-2 text-center rounded cursor-pointer ${
                  selectedSizes.includes(size) ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
