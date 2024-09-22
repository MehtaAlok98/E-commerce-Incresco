"use client";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEcommerce } from "@/context/EcommerceContext";

const SearchInput = () => {
  const { setSearchBarValue } = useEcommerce();
  const [inputValue, setInputValue] = useState(""); // Local state for input

  // Debounce the search input to avoid excessive filtering
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchBarValue(inputValue); // Update the context state after delay
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn); // Cleanup the timeout
  }, [inputValue, setSearchBarValue]);

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update local state
        className="pl-10 pr-10 py-2 w-full border rounded-lg text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Suffix Icons */}
      {inputValue.length > 0 ? (
        <button
          onClick={handleClear}
          className="absolute right-3 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      ) : (
        <MagnifyingGlassIcon className="absolute right-3 h-5 w-5 text-gray-400" />
      )}
    </div>
  );
};

export default SearchInput;
