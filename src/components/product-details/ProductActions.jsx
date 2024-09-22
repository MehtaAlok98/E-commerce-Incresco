'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEcommerce } from "@/context/EcommerceContext";

const ProductActions = ({ product }) => {
  const { addToCart } = useEcommerce();

  return (
    <div className="m-6 flex items-center space-x-4">
      <button
        onClick={() => addToCart(product)}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition duration-200"
      >
        <ShoppingCartIcon className="w-6 h-6" />
        <span>Add to cart</span>
      </button>
      <p className="text-xl font-semibold">${product?.price || 0}</p>
    </div>
  );
};

export default ProductActions;
