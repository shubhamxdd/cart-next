import CardSkeleton from "./CardSkeleton";

export default function Loading() {
  const arr = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="flex justify-center flex-wrap">
      {arr.map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
