import { Metadata } from "next";
export default function Product() {
  return (
    <>
      <h1 className="text-2xl text-center mt-2">HOMEPAGE</h1>
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
