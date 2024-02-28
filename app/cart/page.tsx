import { Metadata } from "next";
import CartPage from "./CartPage";

const Cart = () => {
  return (
    <>
      <CartPage />
    </>
  );
};

export default Cart;

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart page",
};
