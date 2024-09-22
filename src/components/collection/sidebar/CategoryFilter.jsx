"use client";
import { useState } from "react";
import { useEcommerce } from "@/context/EcommerceContext";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"; // Adjust import based on your icon library
import FilterHeader from "./FilterHeader"; // Adjust the import based on your component structure

export default function SubCategoryFilter() {
  const { subCategory, setSubCategory } = useEcommerce();
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(true);

  const subCategories = [
    "Full Sleeve T-shirts",
    "Printed T-shirts",
    "Plain T-shirts",
    "Tops",
    "Kurti",
    "Boxers",
    "Joggers",
    "Pajamas",
    "Jeans",
  ];

  const toggleSubCategory = (e) => {
    const selectedSubCategory = e.target.value;
    if (subCategory.includes(selectedSubCategory)) {
      setSubCategory((prev) =>
        prev.filter((item) => item !== selectedSubCategory)
      );
    } else {
      setSubCategory((prev) => [...prev, selectedSubCategory]);
    }
  };

  return (
    <>
      <FilterHeader
        title="Categories"
        onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
      >
        {isSubCategoryOpen ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </FilterHeader>
      <div className="my-6">
        {isSubCategoryOpen && (
          <ul className="space-y-2">
            {subCategories.map((subCategoryName, index) => (
              <li key={index}>
                <label className="flex gap-2 items-center cursor-pointer text-gray-700">
                  <input
                    type="checkbox"
                    value={subCategoryName}
                    checked={subCategory.includes(subCategoryName)}
                    onChange={toggleSubCategory}
                    className="cursor-pointer"
                  />
                  {subCategoryName}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
