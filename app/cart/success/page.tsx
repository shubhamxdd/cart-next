import { Metadata } from "next";
import CartScs from "./CartScs";

const SuccessPage = () => {
  return (
    <>
      <CartScs />
    </>
  );
};

export default SuccessPage;

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Thank you for your purchase.",
};
