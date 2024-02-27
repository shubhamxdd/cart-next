"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  setSortOrderPrice: (string: "asc" | "desc" | null) => void;
  setSortOrderRating: (string: "asc" | "desc" | null) => void;
}

const SortByPrice = ({ setSortOrderPrice, setSortOrderRating }: Props) => {
  const [positionPrice, setPositionPrice] = useState("");
  const [positionRating, setPositionRating] = useState("");
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"}>Sort By</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Price</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuRadioGroup
            value={positionPrice}
            onValueChange={setPositionPrice}
          >
            <DropdownMenuRadioItem
              value="desc"
              onClick={() => setSortOrderPrice("desc")}
            >
              High To Low
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="asc"
              onClick={() => setSortOrderPrice("asc")}
            >
              Low To High
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="reset"
              onClick={() => setSortOrderPrice(null)}
            >
              Reset
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Rating</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={positionRating}
            onValueChange={setPositionRating}
          >
            <DropdownMenuRadioItem
              value="desc"
              onClick={() => setSortOrderRating("desc")}
            >
              High To Low
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="asc"
              onClick={() => setSortOrderRating("asc")}
            >
              Low To High
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="reset"
              onClick={() => setSortOrderRating(null)}
            >
              Reset
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SortByPrice;
