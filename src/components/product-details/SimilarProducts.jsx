"use client";

import { useEffect, useState } from "react";
import { useEcommerce } from "@/context/EcommerceContext";
import ProductCard from "../ProductCard";

const SimilarProducts = ({ product }) => {
  const { sortedProducts, isLoading } = useEcommerce();

  const [visibleProducts, setVisibleProducts] = useState(10);
  const [similarProducts, setSimilarProducts] = useState([]);

  // Function to handle "Load More" action
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10);
  };

  useEffect(() => {
    // console.log("sortedProducts:", sortedProducts); // Debugging
    if (product && sortedProducts.length > 0) {
      const filteredProducts = sortedProducts.filter(
        (item) =>
          item.category === product.category &&
          item.subCategory === product.subCategory &&
          item.id !== product.id // Ensure to use id instead of id
      );

      // Update similar products state
      setSimilarProducts(filteredProducts);
    }
  }, [product, sortedProducts]);

  if (isLoading) {
    return <div>Loading similar products...</div>;
  }

  if (!isLoading && similarProducts.length === 0) {
    return <div>Unique products found.</div>; // Fallback message
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800">Similar Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {similarProducts.slice(0, visibleProducts).map((similarProduct) => (
          <ProductCard key={similarProduct.id} product={similarProduct} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < similarProducts.length && (
        <button
          onClick={loadMoreProducts}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default SimilarProducts;
