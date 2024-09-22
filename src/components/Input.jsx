import React from "react";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  outline: {
    gray_400_cc: "border-gray-400_cc border border-solid text-gray-800_02",
  },
  fill: {
    gray_100_01: "bg-gray-100_01",
  },
};

const sizes = {
  xs: "h-[32px] px-[30px] text-[16px]",
  sm: "h-[44px] pl-5 pr-3 text-[16px]",
};

const Input = (
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "gray_400_cc",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-[16px] rounded-lg  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  }
);

export default Input ;

