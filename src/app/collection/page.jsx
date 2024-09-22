import Heading from "@/components/Heading";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/collection/sidebar";
import Sort from "@/components/collection/Sort";

export const metadata = {
  title: "Incresco Collection",
  description:
    "Ecommerce App developed by alok as part of coding round at Incresco.",
};

export default function Collection() {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      <div className="min-w-60">
        <Sidebar />
      </div>
      <div className="flex-1 pt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:space-y-0 space-y-4 sm:space-x-8">
          <div className="flex space-x-6">
            <Heading
              size="headingxl"
              as="h5"
              className="text-[22px] sm:text-[28px] font-semibold text-gray-800"
            >
              Women’s Clothing
            </Heading>
          </div>
          <div className="flex space-x-6">
            <Heading
              size="headingxl"
              as="h5"
              className="text-[22px] sm:text-[28px] font-semibold text-[#8A33FD]"
            >
              New
            </Heading>
            <Heading
              size="headingxl"
              as="h5"
              className="text-[22px] sm:text-[28px] font-semibold text-gray-800"
            >
              Recommended
            </Heading>
          </div>
        </div>
        <Sort />
        <ProductList />
      </div>
    </div>
  );
}
