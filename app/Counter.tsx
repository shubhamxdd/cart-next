"use client";

import { Button } from "@/components/ui/button";
import { counterStore } from "@/store/counterStore";

const Counter = () => {
  const { count, decreaseCount, increaseCount, reset } = counterStore();

  return (
    <>
      <div className="flex gap-3">
        <h1 className="text-xl font-semibold">Current Count: {count}</h1>
        <Button onClick={increaseCount}>Increase</Button>
        <Button onClick={decreaseCount}>Decrease</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};

export default Counter;
