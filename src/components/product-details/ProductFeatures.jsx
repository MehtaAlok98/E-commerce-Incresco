import {
  LockClosedIcon,
  TruckIcon,
  ArrowPathIcon,
  VariableIcon,
} from "@heroicons/react/24/outline";

const ProductFeatures = () => {
  const features = [
    { icon: <LockClosedIcon className="w-6 h-6" />, label: "Secure Payment" },
    { icon: <VariableIcon className="w-6 h-6" />, label: "Size & Fit" },
    { icon: <TruckIcon className="w-6 h-6" />, label: "Free Shipping" },
    {
      icon: <ArrowPathIcon className="w-6 h-6" />,
      label: "Free Shipping & Returns",
    },
  ];

  return (
    <div className="border-t border-gray-300 pt-6">
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="bg-gray-100 p-3 rounded-full">
              {feature.icon}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
