"use client";

import AddRemoveFromCart from "@/components/AddRemoveFromCart";
import { Product } from "@/components/ProductsListing";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cartStore } from "@/store/cartStore";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const { clearCart, addToCart } = cartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const router = useRouter()

  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data: Product = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    clearCart();
    addToCart(product!);

    router.push("/cart/checkout")

  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-3">
        <div className="col-span-1 sm:col-span-4 md:col-span-4 container">
          {product?.image ? (
            <Image
              src={product?.image}
              alt={product?.title ?? "Loading..."}
              width={400}
              height={400}
              className="top-4 sticky mt-5 mx-auto"
            />
          ) : (
            <Skeleton className="w-full h-[80%] rounded-lg" />
          )}
        </div>
        <div className="main col-span-1 sm:col-span-5 md:col-span-5 mx-4">
          <div className="sticky top-0 dark:bg-slate-950 bg-white pt-2 pb-2 ">
            <h1 className="text-xl font-bold">
              {product?.title ?? (
                <div className="flex flex-col gap-3">
                  <Skeleton className="h-6 w-full rounded-lg" />
                  <Skeleton className="h-6 w-16 rounded-lg" />
                </div>
              )}
            </h1>
            <div className="text-lg font-semibold mt-2 flex">
              $
              {product?.price ? (
                <p>{product.price}</p>
              ) : (
                <div className="flex flex-col gap-3 mt-2">
                  <Skeleton className="h-6 w-16 rounded-lg" />
                </div>
              )}
            </div>
          </div>
          <div className="mt-2">
            {product?.description ? (
              <p>{product.description}</p>
            ) : (
              <div className="flex flex-col gap-3 mt-2">
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-16 rounded-lg" />
              </div>
            )}
          </div>
          <div className="mt-10">
            {product?.description ? (
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim officiis adipisci sapiente laudantium veniam nobis natus alias ipsum facilis hic aperiam, blanditiis nesciunt commodi itaque. Quibusdam, nemo reiciendis vero beatae iure debitis ex deleniti officia quod expedita sapiente sequi, inventore illo eos voluptatem totam natus libero eligendi cumque molestias! Illum laudantium sunt porro, praesentium recusandae blanditiis officiis enim voluptatibus officia assumenda corrupti autem iusto, accusamus quo unde id. Nostrum iure placeat fugiat perspiciatis suscipit accusamus, natus aliquam quae. Impedit non maxime exercitationem commodi magni esse consequatur blanditiis explicabo facilis debitis porro, repellat, iure, neque dolor? Nulla voluptates saepe nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim officiis adipisci sapiente laudantium veniam nobis natus alias ipsum facilis hic aperiam, blanditiis nesciunt commodi itaque. Quibusdam, nemo reiciendis vero beatae iure debitis ex deleniti officia quod expedita sapiente sequi, inventore illo eos voluptatem totam natus libero eligendi cumque molestias! Illum laudantium sunt porro, praesentium recusandae blanditiis officiis enim voluptatibus officia assumenda corrupti autem iusto, accusamus quo unde id. Nostrum iure placeat fugiat perspiciatis suscipit accusamus, natus aliquam quae. Impedit non maxime exercitationem commodi magni esse consequatur blanditiis explicabo facilis debitis porro, repellat, iure, neque dolor? Nulla voluptates saepe nam."
            ) : (
              <div className="flex flex-col gap-3 mt-10">
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-16 rounded-lg" />
              </div>
            )}
          </div>
        </div>
        <div className="aside col-span-1 sm:col-span-3 md:col-span-3">
          <div className="flex flex-col gap-5 mt-10 sticky top-10 max-md:pb-20">
            <AddRemoveFromCart item={product!} isRemove={false} />
            <Button variant={"blue"} onClick={handleClick}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
