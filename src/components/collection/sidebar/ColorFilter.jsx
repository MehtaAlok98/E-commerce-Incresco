"use client";
import { useState } from "react";
import Heading from "@/components/Heading";
import { useEcommerce } from "@/context/EcommerceContext";
import FilterHeader from "./FilterHeader"; // Assuming FilterHeader component is used
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ColorFilter() {
  const { selectedColors, setSelectedColors } = useEcommerce();
  const [isColorOpen, setIsColorOpen] = useState(true); // Toggle state for collapse

  const colors = [
    { name: "Purple", color: "bg-purple-500" },
    { name: "Black", color: "bg-black" },
    { name: "Red", color: "bg-red-500" },
    { name: "Orange", color: "bg-orange-500" },
    { name: "Navy", color: "bg-blue-900" },
    { name: "White", color: "bg-white border" },
    { name: "Brown", color: "bg-yellow-900" },
    { name: "Green", color: "bg-green-500" },
    { name: "Yellow", color: "bg-yellow-500" },
    { name: "Gray", color: "bg-gray-500" },
    { name: "Pink", color: "bg-pink-500" },
    { name: "Blue", color: "bg-blue-500" },
  ];

  const toggleColor = (colorName) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors((prev) => prev.filter((item) => item !== colorName));
    } else {
      setSelectedColors((prev) => [...prev, colorName]);
    }
  };

  return (
    <>
      {/* Filter Header with toggle functionality */}
      <FilterHeader title="Color" onClick={() => setIsColorOpen(!isColorOpen)}>
        {isColorOpen ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </FilterHeader>

      <div className="my-6">
        {/* Collapsible color options */}
        {isColorOpen && (
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Rounded Square Color Swatch */}
                <div
                  className={`w-10 h-10 rounded-lg ${
                    color.color
                  } cursor-pointer ${
                    selectedColors.includes(color.name)
                      ? "ring-2 ring-offset-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => toggleColor(color.name)}
                />
                {/* Color Name Text */}
                <Heading
                  size="headingxs"
                  as="p"
                  className="text-[12px] font-semibold text-blue_gray-400 mt-2"
                >
                  {color.name}
                </Heading>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
