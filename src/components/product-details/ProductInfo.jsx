import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <a href="#" className="hover:underline">
          Shop
        </a>
        <span>/</span>
        <a href="#" className="hover:underline">
          {product.category}
        </a>
        <span>/</span>
        <a href="#" className="hover:underline">
          {product.subCategory}
        </a>
      </div>

      {/* Product Name */}
      <h1 className="text-3xl font-semibold">
        {product?.name || "Product Name"}
      </h1>

      {/* Ratings and Comments */}
      <div className="flex items-center space-x-2 text-sm">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`w-5 h-5 ${index < product?.rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p>{product?.rating || 0}</p>
        <span className="text-gray-500">{`(${product?.comments_count || 0} comments)`}</span>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-sm text-gray-500">Select Size</p>
        <div className="flex space-x-2">
          {product?.sizes?.length > 0 ? (
            product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 border border-gray-300 rounded-lg hover:border-black ${selectedSize === size ? "bg-gray-900 text-white" : ""}`}
              >
                {size}
              </button>
            ))
          ) : (
            <p>No sizes available</p>
          )}
        </div>
      </div>

      {/* Colors */}
      <div>
        <p className="text-sm text-gray-500">Colours Available</p>
        <div className="flex space-x-2">
          {product?.color?.length > 0 ? (
            product.color.map((clr, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:border-black`}
                style={{ backgroundColor: clr.toLowerCase() }}
              ></div>
            ))
          ) : (
            <p>No colors available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
