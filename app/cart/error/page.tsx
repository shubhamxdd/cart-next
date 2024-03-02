import CartErr from "./CartErr";
import { Metadata } from "next";

const PaymentErrorPage = () => {
  return (
    <>
      <CartErr />
    </>
  );
};

export default PaymentErrorPage;

export const metadata: Metadata = {
  title: "Payment Failed",
  description: "There was an error processing your payment. Please try again.",
};
