"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CategoryButton from "./CategoriesButton";
import toast from "react-hot-toast";
import SortByPrice from "./SortByPriceAndRating";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductsListing = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [category, setCategory] = useState<string | null>("");
  const [sortOrderPrice, setSortOrderPrice] = useState<"asc" | "desc" | null>(
    null
  );
  const [sortOrderRating, setSortOrderRating] = useState<"asc" | "desc" | null>(
    null
  );

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json();
      setProducts(data);
      if (category) {
        setProducts(data.filter((item: Product) => item.category === category));
      }
    } catch (error) {
      toast.error("An error occured! Please try again.");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const sortedProductsPrice = [...products].sort((a, b) => {
    if (sortOrderPrice === "asc") {
      return a.price - b.price;
    } else if (sortOrderPrice === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const sortedProductsRating = [...products].sort((a, b) => {
    if (sortOrderRating === "asc") {
      return a.rating.rate - b.rating.rate;
    } else if (sortOrderRating === "desc") {
      return b.rating.rate - a.rating.rate;
    }
    return 0;
  });

  return (
    <>
      {/* TODO FILTERING LOGIC HERE */}
      <div className="flex gap-4 my-5 flex-wrap items-center justify-center">
        <SortByPrice
          setSortOrderPrice={setSortOrderPrice}
          setSortOrderRating={setSortOrderRating}
        />
        <CategoryButton setCategory={setCategory} />
      </div>
      <div className="flex justify-center flex-wrap">
        {/* todo nahi samajh aaya ye */}
        {(sortOrderPrice
          ? sortedProductsPrice
          : sortOrderRating
          ? sortedProductsRating
          : products
        ).map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
        {/* {sortOrderRating
          ? sortedProductsRating.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })
          : products.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })} */}
      </div>
    </>
  );
};

export default ProductsListing;
