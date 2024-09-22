// import { NextResponse } from "next/server";

// import products from "@/lib/assets";

// const product = products.slice();

// export async function GET() {
//   return NextResponse.json({
//     data: product,
//   });
// }

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.mjs"; // Adjust the import according to your project structure

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    
    // Parse the CSV fields into arrays
    const formattedProducts = products.map((product) => ({
      ...product,
      image: product.image.split(", "), // Split comma-separated values into arrays
      sizes: product.sizes.split(", "), // Split comma-separated values into arrays
      color: product.color.split(", "), // Split comma-separated values into arrays
    }));

    // console.log(formattedProducts.slice(0,5));

    return NextResponse.json({ data: formattedProducts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
