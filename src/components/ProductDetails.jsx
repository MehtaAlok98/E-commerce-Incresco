// components/ProductDetails.js
import Image from "next/image";

const ProductDetails = ({ product }) => {
  // console.log(product.image);
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2">
        <Image
          src={product.image[0]}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-800">
            {product.price}
          </span>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
        <ul className="mt-4">
          {product.features.map((feature) => (
            <li key={feature} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
