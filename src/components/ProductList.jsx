"use client";
import React, { useState } from "react";
import { useEcommerce } from "@/context/EcommerceContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { sortedProducts } = useEcommerce();
  const [visibleProducts, setVisibleProducts] = useState(10);

  // Function to handle "Load More" action
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10);
  };

  return (
    <div className="flex flex-col items-center pb-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
        {sortedProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < sortedProducts.length && (
        <button
          onClick={loadMoreProducts}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;
