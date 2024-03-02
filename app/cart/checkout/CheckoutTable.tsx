"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cartStore } from "@/store/cartStore";
import Image from "next/image";
import CheckoutForm from "./CheckoutForm";

const CheckoutTable = () => {
  const { cart } = cartStore();
  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <Table>
            <TableCaption>Your Cart</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead className="px-5">Title</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={50}
                        height={50}
                      />
                    </TableCell>
                    <TableCell className="px-5">{item.title}</TableCell>
                    <TableCell>{item.rating.rate}⭐</TableCell>
                    <TableCell className="text-right">${item.price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="py-3" colSpan={3}>
                  Total
                </TableCell>
                <TableCell className="text-right font-semibold">
                  ${cartTotal.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <div>
            <CheckoutForm />
          </div>
          {/* <div className="flex justify-between my-2">
            
          </div> */}
        </>
      )}
    </>
  );
};

export default CheckoutTable;
