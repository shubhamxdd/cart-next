"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* TODO FILTERING LOGIC HERE */}
      <div className="flex justify-center flex-wrap">
        {products.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ProductsListing;
