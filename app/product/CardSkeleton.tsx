import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 flex flex-col">
      <CardHeader className="flex justify-center items-center h-32">
        <Skeleton className="h-20 w-32 rounded-lg" />
      </CardHeader>
      <CardContent className="p-2 flex-grow">
        <Skeleton className="w-24 h-4 rounded-lg" />
        <CardDescription className="text-gray-600 min-h-[3rem] mt-4 flex flex-col gap-2">
          <Skeleton className="w-full h-4 rounded-lg" />
          <Skeleton className="w-full h-4 rounded-lg" />
          <Skeleton className="w-full h-4 rounded-lg" />
          <p className="font-semibold dark:text-white text-black  mt-1 text-base">
            <Skeleton className="h-4 w-16 rounded-full" />
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter></CardFooter>
      <div className="flex items-center w-full justify-evenly px-2 pb-2 gap-3">
        <Skeleton className="w-24 h-8 rounded-lg" />
        <Skeleton className="w-24 h-8 rounded-lg" />
      </div>
    </Card>
  );
};

export default CardSkeleton;
