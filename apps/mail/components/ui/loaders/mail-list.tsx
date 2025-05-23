import { Skeleton } from '../skeleton';

interface MailListSkeletonProps {
  count: number;
}

const MailListItemSkeleton = () => {
  return (
    <div className="hover:bg-offsetLight hover:bg-primary/5 select-none border-b pb-2 md:border-none">
      <div className="group relative mx-1 flex flex-col items-start rounded-lg py-2 text-left text-sm">
        <div className="flex w-full items-center justify-between gap-4 px-4">
          <div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <div className="flex w-full justify-between">
            <div className="w-full">
              <div className="flex w-full flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-[4px]">
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-3 w-12" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="mt-1 h-4 w-3/4" />
                <div className="hidden md:flex">
                  <Skeleton className="ml-2 h-5 w-16 rounded-full" />
                </div>
              </div>
              <div className="mt-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="mt-1 h-3 w-4/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MailListSkeleton = ({ count }: MailListSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <MailListItemSkeleton key={index} />
      ))}
    </>
  );
};

export default MailListSkeleton;
