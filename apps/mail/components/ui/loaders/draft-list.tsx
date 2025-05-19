import { Skeleton } from '../skeleton';

interface DraftListSkeletonProps {
  count?: number;
}

const DraftListItemSkeleton = () => {
  return (
    <div className="hover:bg-offsetLight hover:bg-primary/5 select-none border-b pb-2 md:border-none">
      <div className="group relative mx-1 flex flex-col items-start rounded-lg py-2 text-left text-sm">
        <div className="flex w-full items-center justify-between gap-4 px-4">
          <div className="flex w-full justify-between">
            <div className="w-full">
              <div className="flex w-full flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-[4px]">
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <div className="flex justify-between">
                <Skeleton className="mt-1 h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DraftListSkeleton = ({ count = 5 }: DraftListSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <DraftListItemSkeleton key={index} />
      ))}
    </>
  );
};

export default DraftListSkeleton;
