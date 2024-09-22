"use client";
import ProductActions from "@/components/product-details/ProductActions";
import ProductFeatures from "@/components/product-details/ProductFeatures";
import ProductImageGallery from "@/components/product-details/ProductImageGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import SimilarProducts from "@/components/product-details/SimilarProducts";
import axios from "axios";
import { useState, useEffect } from "react";

const Page = ({ params = {} }) => {
  const [product, setProduct] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${params.id}`);
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  // Handle image selection from gallery
  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-8">
        {/* Left - Image Gallery */}
        <div className="w-1/2 flex">
          <div className="w-1/5">
            {/* Pass the product images array to the ProductImageGallery */}
            <ProductImageGallery
              images={product.image || []}
              onSelectImage={handleImageSelect} // Pass the handler to switch images
            />
          </div>
          <div className="w-4/5">
            {/* Main image display */}
            {product.image && product.image.length > 0 && (
              <img
                src={product.image[selectedImageIndex]} // Switch the main image based on selected thumbnail
                alt={product.name}
                width={500}
                height={500}
              />
            )}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="w-1/2">
        {/* <ProductDetail product={product} /> */}
          <ProductInfo product={product} />
          <ProductActions product={product} />
          <ProductFeatures />
        </div>
      </div>
      {/* Render Similar Products */}
      <SimilarProducts product={product} />
    </div>
  );
};

export default Page;
