import { Metadata } from "next";
import CheckoutTable from "./CheckoutTable";

const CheckoutPage = () => {
  return (
    <>
      <CheckoutTable />
    </>
  );
};

export default CheckoutPage;

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout page",
};
