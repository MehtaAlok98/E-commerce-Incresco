// import { NextResponse } from "next/server";
// import products from "@/lib/assets"; // Assuming the path is correct

// export async function GET(req, { params }) {
//   const { id } = params; // Extract `id` from the params

//   const selectedProduct = products.find((product) => product.id == id);

//   if (!selectedProduct) {
//     return NextResponse.json(
//       {
//         error: "Product not found",
//       },
//       { status: 404 }
//     );
//   }

//   return NextResponse.json({
//     data: selectedProduct,
//   });
// }

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.mjs"; // Adjust the import based on your project's structure

export async function GET(req, { params }) {
  const { id } = params; // Extract `id` from the request params

  try {
    // Fetch the product by id from the database
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    // If product not found, return 404 response
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Parse the CSV fields (if necessary) into arrays
    const formattedProduct = {
      ...product,
      image: product.image ? product.image.split(", ") : [], // Split comma-separated values into arrays
      sizes: product.sizes ? product.sizes.split(", ") : [], // Split comma-separated values into arrays
      color: product.color ? product.color.split(", ") : [], // Split comma-separated values into arrays
    };

    return NextResponse.json({
      data: formattedProduct,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

