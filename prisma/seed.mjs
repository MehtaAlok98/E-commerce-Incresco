import prisma from "../src/lib/prisma.mjs"; // Adjust based on your project structure

import products from "../src/lib/assets.mjs";

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(() => console.log("Database seeded"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
