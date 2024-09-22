import { StarIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEcommerce } from "@/context/EcommerceContext";
import { useState } from "react";

const ProductDetail = ({ product }) => {
  const { addToCart } = useEcommerce();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      // toast.error('Select Product Size and Color');
      return;
    }
    addToCart(product.id, selectedSize, selectedColor);
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <a href="#" className="hover:underline">Shop</a>
        <span>/</span>
        <a href="#" className="hover:underline">{product.category}</a>
        <span>/</span>
        <a href="#" className="hover:underline">{product.subCategory}</a>
      </div>

      {/* Product Name */}
      <h1 className="text-3xl font-semibold">{product?.name || "Product Name"}</h1>

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

      {/* Size Selector */}
      <div>
        <p className="text-sm text-gray-500">Select Size</p>
        {product?.sizes?.length > 0 ? (
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="mb-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Size</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        ) : (
          <p>No sizes available</p>
        )}
      </div>

      {/* Color Selector */}
      <div>
        <p className="text-sm text-gray-500">Colours Available</p>
        <div className="flex space-x-2 mb-2">
          {product?.colors?.length > 0 ? (
            product.colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))
          ) : (
            <p>No colors available</p>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition duration-200"
      >
        <ShoppingCartIcon className="w-6 h-6" />
        <span>Add to cart</span>
      </button>
      
      {/* Product Price */}
      <p className="text-xl font-semibold">${product?.price || 0}</p>
    </div>
  );
};

export default ProductDetail;
