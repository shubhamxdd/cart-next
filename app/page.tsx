import { Metadata } from "next";
// import Counter from "./Counter";

export default function Product() {
  return (
    <>
      <h1 className="text-2xl text-center mt-2">HOMEPAGE</h1>
      {/* <Counter /> */}
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Home | E-Commerce",
    template: "%s | E-Commerce",
  },
  description: "",
};
