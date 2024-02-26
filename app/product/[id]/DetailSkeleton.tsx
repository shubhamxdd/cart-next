import { Skeleton } from '@/components/ui/skeleton'

const DetailSkeleton = () => {
  return (
    <>
         <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-3">
        <div className="col-span-1 sm:col-span-4 md:col-span-4 container">
          <div>
            <Skeleton className="w-40 h-40" />
          </div>
        </div>
        <div className="main col-span-1 sm:col-span-5 md:col-span-5 mx-4">
          <div className="sticky top-0 dark:bg-slate-950 bg-white pt-2 pb-2 ">
            <Skeleton className="h-6 w-32 rounded-lg" />
            <Skeleton className="h-6 w-28 rounded-lg mt-1" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
          </div>
        </div>
        <div className="aside col-span-1 sm:col-span-3 md:col-span-3">
          <div className="flex flex-col gap-5 mt-10 sticky top-10 max-md:pb-20">
            <Skeleton className="w-24 h-8 rounded-lg" />
            <Skeleton className="w-24 h-8 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailSkeleton