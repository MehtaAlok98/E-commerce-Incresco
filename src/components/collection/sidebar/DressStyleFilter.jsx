"use client";
import { useState } from "react";
import { useEcommerce } from "@/context/EcommerceContext";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"; // Adjust import based on your icon library
import FilterHeader from "./FilterHeader"; // Adjust the import based on your component structure

export default function DressStyleFilter() {
  const { selectedStyles, setSelectedStyles } = useEcommerce();
  const [isStyleOpen, setIsStyleOpen] = useState(true);

  const styles = [
    "Classic",
    "Casual",
    "Business",
    "Sport",
    "Elegant",
    "Formal (evening)",
  ];

  const toggleStyle = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles((prev) => prev.filter((item) => item !== style));
    } else {
      setSelectedStyles((prev) => [...prev, style]);
    }
  };

  return (
    <>
      <FilterHeader title="Style" onClick={() => setIsStyleOpen(!isStyleOpen)}>
        {isStyleOpen ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </FilterHeader>
      <div className="my-6">
        {isStyleOpen && (
          <ul className="space-y-2">
            {styles.map((style, index) => (
              <li key={index}>
                <p className="flex gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    value={style}
                    checked={selectedStyles.includes(style)}
                    onChange={() => toggleStyle(style)}
                  />
                  {style}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
