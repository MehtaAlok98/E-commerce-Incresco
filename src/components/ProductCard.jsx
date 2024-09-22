"use client";
import Image from "next/image";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useEcommerce } from "@/context/EcommerceContext";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { currency } = useEcommerce();

  return (
    <Link href={`/collection/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform group-hover:scale-105 relative">
        {/* Product Image with a Favorite Icon */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src={product.image[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <button
            className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigating when clicking the favorite button
              setIsFavorite(!isFavorite);
            }}
          >
            <HeartIcon
              className={`w-6 h-6 ${isFavorite ? "text-red-500" : "text-gray-500"}`}
            />
          </button>
        </div>

        {/* Product Details */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">
            {product.brand || "Brand's name"}
          </p>
          <div className="mt-2">
            <span className="text-gray-800 font-semibold">
              {currency}
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
