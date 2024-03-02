"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CartErr = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Payment Failed!</h1>
        <p className="text-xl">
          There was an error processing your payment. Please try again.
        </p>
        <Button className="mt-4" onClick={() => router.back()}>
          Go back and retry
        </Button>
      </div>
    </>
  );
};

export default CartErr;
