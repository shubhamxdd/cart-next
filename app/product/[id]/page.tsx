"use client";

import { Product } from "@/components/ProductsListing";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data: Product = await res.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-3">
        <div className="col-span-1 sm:col-span-4 md:col-span-4 container">
          <Image
            src={product?.image!}
            alt={product?.title!}
            width={400}
            className="top-4 sticky mt-5 mx-auto"
            height={400}
          />
        </div>
        <div className="main col-span-1 sm:col-span-5 md:col-span-5 mx-4">
          <div className="sticky top-0 dark:bg-slate-950 bg-white pt-2 pb-2 ">
            <h1 className="text-xl font-bold">{product?.title}</h1>
            <h2 className="text-lg font-semibold mt-2">${product?.price}</h2>
          </div>
          <p className="mt-2">{product?.description}</p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae
            quibusdam consectetur natus! Harum ad repellat tempora corporis eum,
            nihil totam? Consequuntur tenetur dolore saepe eaque eligendi
            ducimus quisquam, pariatur laborum cumque unde in aspernatur dolor
            repellendus doloribus soluta quia? Vel error optio nisi explicabo
            corporis, sint sed debitis qui, cupiditate modi incidunt beatae
            libero corrupti labore. Necessitatibus fuga quas delectus quam porro
            dolorem at cupiditate, totam beatae aperiam assumenda nisi vero
            voluptatem ab corrupti animi recusandae illum, nihil cumque
            reiciendis labore, ipsa expedita pariatur commodi. Rem, blanditiis.
            Tenetur qui itaque pariatur? Repellendus explicabo, eum, voluptatum
            quisquam ipsum incidunt repellat iure suscipit quae perspiciatis,
            laboriosam voluptate totam itaque neque natus cum dolorem soluta?
            Reiciendis temporibus tenetur praesentium velit odit recusandae
            deserunt molestiae dolor nostrum esse, quia impedit reprehenderit
            vitae nemo consequatur dolorem doloremque aperiam consectetur
            assumenda repellendus voluptate rem molestias corporis. Ad nostrum a
            tenetur earum, sed doloremque modi architecto veritatis molestias
            laudantium eos expedita nam. Excepturi porro impedit, quaerat
            explicabo suscipit sit culpa quae necessitatibus ex maxime accusamus
            similique minus laudantium illo eaque numquam facere aliquam aperiam
            architecto molestias sequi ab et delectus ducimus? Culpa in nesciunt
            provident magnam qui itaque possimus, quae ducimus dolor
            exercitationem non labore saepe excepturi placeat sit dicta corrupti
            sint fugit. Voluptatibus tenetur, ipsam iusto similique quidem
            voluptatum magni consectetur eos laboriosam, aliquid in, possimus
            ut? Tempore, incidunt fugiat consequuntur inventore ipsam dolores
            earum repellendus dicta eos. Ratione tempora consequatur sapiente
            laboriosam voluptate quo aperiam culpa libero cum fugiat ducimus
            velit, eius, temporibus soluta deleniti doloremque! Repellat quae
            voluptatum laborum odio perferendis atque incidunt, cum ut. Aperiam
            ut, qui sunt molestiae minus voluptatibus, accusamus obcaecati
            quibusdam inventore natus aspernatur, eum modi incidunt reiciendis
            aliquid alias. Aspernatur quae nemo, amet atque dicta in magni
            accusantium soluta debitis, perspiciatis, maiores deserunt quasi
            error doloremque alias. Reiciendis!
          </p>
        </div>
        <div className="aside col-span-1 sm:col-span-3 md:col-span-3">
          <div className="flex flex-col gap-5 mt-10 sticky top-10 max-md:pb-20">
            <Button variant={"default"}>Add to cart</Button>
            <Button variant={"blue"}>Buy Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
