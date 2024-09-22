'use client';
import { useEcommerce } from "@/context/EcommerceContext";

const Sort = () => {
  const { setSortType } = useEcommerce();

  return (
    <div className="flex justify-end mb-4">
      <select
        onChange={(e) => setSortType(e.target.value)}
        className="border-2 border-gray-300 text-sm sm:text-lg px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="relevent">Sort by: Relevant</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
