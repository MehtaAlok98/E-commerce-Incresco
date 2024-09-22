import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    deep_purple_A200: "bg-deep_purple-a200 text-white-a700",
    white_A700: "bg-white-a700",
    gray_100_01: "bg-gray-100_01 text-gray-800_02",
  },
  outline: {
    gray_800_02: "border-gray-800_02 border border-solid text-gray-800_02",
  },
};
const sizes = {
  md: "h-[36px] px-2.5 text-[17px]",
  xs: "h-[20px]",
  "2xl": "h-[46px] px-[34px] text-[18px]",
  xl: "h-[44px] px-3",
  lg: "h-[36px] px-4 text-[14px]",
  sm: "h-[32px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "gray_100_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default Button;
