"use client";

import { cartStore } from "@/store/cartStore";
import { Button } from "./ui/button";
import { type Product } from "./ProductsListing";

interface AddtoCardButtonProps {
  className?: string;
  item: Product;
}

const AddtoCardButton = ({ item }: AddtoCardButtonProps) => {
  const { addToCart, cart } = cartStore();
  return (
    <Button
      onClick={() => {
        addToCart(item);
        // console.log("cart", cart);
      }}
      className="w-full"
    >
      Add to cart
    </Button>
  );
};

export default AddtoCardButton;
