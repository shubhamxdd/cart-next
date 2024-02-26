"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/store/cartStore";
import React from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = cartStore();

  const handleClearCart = () => {
    try {
      clearCart();
      toast.success("Cart cleared");
    } catch (error) {
      console.log(error);
      toast.error("Error clearing cart");
    }
  };

  if (cart.length === 0)
    return (
      <h1 className="text-4xl font-semibold text-center mt-3">
        No items here !
      </h1>
    );

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <h1 className="text-2xl font-semibold mt-2 text-center">CartPage</h1>
      <div className="flex items-center justify-between gap-3 my-3">
        {cart && <h1 className="text-xl">Cart total: ${total.toFixed(2)}</h1>}
        <Button onClick={handleClearCart}>Reset cart</Button>
      </div>
      <div className="flex justify-center flex-wrap">
        {cart.length === 0
          ? "No items in cart"
          : cart.map((item) => (
              <ProductCard key={item.id} fromCart item={item} />
            ))}
      </div>
    </>
  );
};

export default CartPage;
