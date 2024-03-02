"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-xl">Thank you for your purchase.</p>
        <Button
          className="mt-4"
          onClick={() => router.push("/product")}
          asChild
        >
          <Link href={"/product"}>Continue Shopping </Link>
        </Button>
      </div>
    </>
  );
};

export default SuccessPage;
