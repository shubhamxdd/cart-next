"use client";

import { cartStore } from "@/store/cartStore";
import { Button } from "./ui/button";
import { type Product } from "./ProductsListing";

interface RemoveFromCartButtonProps {
  className?: string;
  item: Product;
}

const RemoveFromCartButton = ({ item }: RemoveFromCartButtonProps) => {
  const { removeFromCart } = cartStore();
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        removeFromCart(item.id);
      }}
      className="w-full"
    >
      Remove item
    </Button>
  );
};

export default RemoveFromCartButton;
