import Link from "next/link";
import { ModeToggle } from "./SwitchMode";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-stone-200 dark:bg-slate-600 max-md:px-6">
      <h1 className="text-xl">
        <Link href={"/"}>StoreName</Link>
      </h1>
      <div className="max-md:hidden block">
        <ul className="flex items-center">
          <li>
            <Button variant={"link"} asChild>
              <Link href="/product">Products</Link>
            </Button>
          </li>
          <li>
            <Button variant={"link"} asChild>
              <Link href="/">Contact Us</Link>
            </Button>
          </li>
          <li>
            <Button variant={"link"} asChild>
              <Link href="/cart">Cart</Link>
            </Button>
          </li>
          <ModeToggle />
        </ul>
      </div>
      <div className="hidden  max-md:flex items-center">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>StoreName</SheetTitle>
              <SheetDescription>
                <ul className="">
                  <li>
                    <SheetClose asChild>
                      <Button variant={"link"} asChild>
                        <Link href="/product">Products</Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant={"link"} asChild>
                        <Link href="/">Contact Us</Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant={"link"} asChild>
                        <Link href="/cart">Cart</Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <ModeToggle />
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
