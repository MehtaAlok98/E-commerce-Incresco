import React from "react";

const sizes = {
  textxs: "text-[14px] font-medium",
  texts: "text-[18px] font-medium",
  textmd: "text-[22px] font-medium",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[16px] font-semibold",
  headingmd: "text-[18px] font-bold",
  headinglg: "text-[20px] font-semibold",
  headingxl: "text-[22px] font-semibold",
  heading2xl: "text-[28px] font-bold md:text-[26px] sm:text-[24px]",
  heading3xl: "text-[34px] font-semibold md:text-[32px] sm:text-[30px]",
};

const Heading = ({
  children,
  className = "",
  size = "texts",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-100_01 font-causten ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Heading ;