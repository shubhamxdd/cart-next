import ProductsListing from "@/components/ProductsListing";
import { Metadata } from "next";

export default function Product() {
  return <ProductsListing />;
}

export const metadata: Metadata = {
  title: "Product List",
  description: "",
};
