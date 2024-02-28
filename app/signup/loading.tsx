import { Skeleton } from "@/components/ui/skeleton";

const SignupLoading = () => {
  return (
    <>
      <Skeleton className="w-[30%] mb-6 h-10 rounded-lg" />

      <div className="border-[1px] border-zinc-400 px-10 py-5 rounded-lg shadow-lg max-w-md mx-auto dark:bg-gray-800 dark:border-gray-700">
        <form>
          <div className="mb-4">
            <Skeleton className="w-full h-4 mb-2 rounded" />
            <Skeleton className="w-full h-10 rounded-md" />
          </div>
          <div className="mb-4">
            <Skeleton className="w-full h-4 mb-2 rounded" />
            <Skeleton className="w-full h-10 rounded-md" />
          </div>
          <div className="mb-6">
            <Skeleton className="w-full h-4 mb-2 rounded" />
            <Skeleton className="w-full h-10 rounded-md" />
          </div>
          <div className="mb-4 -mt-2">
            <Skeleton className="w-full h-4 rounded" />
          </div>
          <Skeleton className="w-full h-10 rounded-md" />
        </form>
      </div>
    </>
  );
};

export default SignupLoading;
