"use client";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const currency = "$";
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const [sortType, setSortType] = useState("relevant");
  const [searchBarValue, setSearchBarValue] = useState("");

  // Fetch products on load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.data);
        // toast.success("Products loaded successfully!");
      } catch (error) {
        console.error("Error fetching products:", error);
        // toast.error("Failed to load products. Please try again later.");
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  // Filter products based on various criteria
  useEffect(() => {
    let productsCopy = [...products];

    // Apply filters
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }
    if (selectedColors.length > 0) {
      productsCopy = productsCopy.filter((product) => product.color.some((color) => selectedColors.includes(color)));
    }
    if (selectedSizes.length > 0) {
      productsCopy = productsCopy.filter((product) => product.sizes.some((size) => selectedSizes.includes(size)));
    }
    if (selectedStyles.length > 0) {
      productsCopy = productsCopy.filter((product) => selectedStyles.includes(product.style));
    }
    productsCopy = productsCopy.filter((product) => product.price >= minValue && product.price <= maxValue);
    if (searchBarValue.trim() !== "") {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(searchBarValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchBarValue.toLowerCase())
      );
    }

    setFilteredProducts(productsCopy);
  }, [
    category,
    subCategory,
    selectedColors,
    selectedSizes,
    selectedStyles,
    minValue,
    maxValue,
    products,
    searchBarValue,
  ]);

  // Sorting products
  useEffect(() => {
    let productsCopy = [...filteredProducts];
    switch (sortType) {
      case "low-high":
        setSortedProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setSortedProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        setSortedProducts(filteredProducts);
        break;
    }
  }, [sortType, filteredProducts]);

  const getProduct = (id) => {
    if (products.length > 0 && id) {
      const product = products.find((product) => product.id === id);
      // if (!product) {
      //   toast.error("Product not found.");
      // }
      return product;
    }
  };

   // Add to cart function
   const addToCart = async (itemId, size, color) => {
    let cartData = structuredClone(cartItems);
  
    if (!size || !color) {
      // toast.error('Select Product Size and Color');
      return null;
    }
  
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }
  
    if (!cartData[itemId][size]) {
      cartData[itemId][size] = {};
    }
  
    if (cartData[itemId][size][color]) {
      cartData[itemId][size][color] += 1;
    } else {
      cartData[itemId][size][color] = 1;
    }
  
    setCartItems(cartData);
  };
  

  // Get total price of cart items
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        for (const color in cartItems[items][size]) {
          totalCount += cartItems[items][size][color] || 0;
        }
      }
    }
    return totalCount;
  };
  

  const value = {
    currency,
    isLoading,
    sortedProducts,
    category,
    setCategory,
    subCategory,
    setSubCategory,
    selectedColors,
    setSelectedColors,
    selectedSizes,
    setSelectedSizes,
    selectedStyles,
    setSelectedStyles,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    setSortType,
    searchBarValue,
    setSearchBarValue,
    getProduct,
    addToCart,
    getCartCount
  };

  return (
    <EcommerceContext.Provider value={value}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerce = () => {
  return useContext(EcommerceContext);
};
