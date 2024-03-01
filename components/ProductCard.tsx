import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { type Product } from "./ProductsListing";
import Link from "next/link";
import AddRemoveFromCart from "./AddRemoveFromCart";

interface ProductCardProps {
  item: Product;
  fromCart?: boolean;
}

const ProductCard = ({ item, fromCart }: ProductCardProps) => {
  return (
    <>
      <Card
        key={item.id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 flex flex-col"
      >
        <CardHeader className="flex justify-center items-center h-32 my-3">
          <Image
            src={item.image}
            alt={item.title}
            height={80}
            width={80}
            className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </CardHeader>
        <CardContent className="p-2 flex-grow">
          <h3 className="font-bold mb-2 leading-5">{item.title}</h3>
          <CardDescription className="text-gray-600 min-h-[3rem]">
            {item.description.length > 70 ? (
              <>{item.description.slice(0, 60)} ...</>
            ) : (
              item.description
            )}
            <p className="font-semibold dark:text-white text-black  mt-1 text-base">
              ${item.price}
            </p>
            <p>Rating: {item.rating.rate} ⭐</p>
          </CardDescription>
        </CardContent>
        <div className="flex items-center w-full justify-evenly px-2 pb-2 gap-3">
          {fromCart ? (
            <AddRemoveFromCart isRemove item={item} />
          ) : (
            <AddRemoveFromCart isRemove={false} item={item} />
          )}
          <Button className="w-full" variant={"blue"} asChild>
            <Link href={`/product/${item.id}`}>Read More</Link>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
