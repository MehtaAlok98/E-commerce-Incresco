import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ProductImageGallery = ({ images = [], onSelectImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle moving to the next or previous image
  const handleScroll = (direction) => {
    if (direction === "up") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    } else if (direction === "down") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
    // Call the onSelectImage function to update the main image when scrolled
    onSelectImage(currentImageIndex);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Thumbnail Images */}
      {images && images.length > 0 ? (
        images.map((img, index) => (
          <div
            key={index}
            className={`relative h-12 w-12 cursor-pointer ${
              index === currentImageIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => {
              setCurrentImageIndex(index);
              onSelectImage(index); // Trigger the parent to switch the main image
            }}
          >
            <Image
              src={img}
              alt={`Product image ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
      {/* Scroll Up Button */}
      <ChevronUpIcon
        className="w-6 h-6 cursor-pointer transform"
        onClick={() => handleScroll("up")}
      />

      {/* Scroll Down Button */}
      <ChevronDownIcon
        className="w-6 h-6 cursor-pointer"
        onClick={() => handleScroll("down")}
      />
    </div>
  );
};

export default ProductImageGallery;
