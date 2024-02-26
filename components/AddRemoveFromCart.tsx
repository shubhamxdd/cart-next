"use client";

import { cartStore } from "@/store/cartStore";
import { Button } from "./ui/button";
import { type Product } from "./ProductsListing";

interface Props {
  className?: string;
  item: Product;
  isRemove: boolean;
}

const AddRemoveFromCart = ({ item, className, isRemove }: Props) => {
  const { addToCart, removeFromCart } = cartStore();
  return (
    <Button
      onClick={() => {
        isRemove ? removeFromCart(item.id) : addToCart(item);
      }}
      //   todo blue => default
      variant={isRemove ? "destructive" : "default"}
      className={`w-full ${className}`}
    >
      {isRemove ? "Remove" : "Add"} item
    </Button>
  );
};

export default AddRemoveFromCart;
