"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/store/cartStore";
import Link from "next/link";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cart, clearCart } = cartStore();

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
      <div className="">
        <Button asChild className="">
          <Link href={"/cart/checkout"}>Checkout</Link>
        </Button>
      </div>
      <div className="flex justify-center flex-wrap">
        {cart.length === 0
          ? "No items in cart"
          : cart.map((item) => (
              <ProductCard key={item.id} fromCart item={item} />
            ))}
      </div>
      <div className="h-16"></div>
    </>
  );
};

export default CartPage;
