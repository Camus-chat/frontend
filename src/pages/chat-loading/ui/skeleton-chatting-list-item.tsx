import { Skeleton } from '@heroui/skeleton';

const SkeletonChattingListItem = () => {
  return (
    <div className='flex gap-2 p-4'>
      <Skeleton className='size-10 rounded-full' />
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-3 w-24 rounded-lg' />
        <Skeleton className='h-4 w-20 rounded-lg' />
        <Skeleton className='h-4 w-36 rounded-lg' />
      </div>
    </div>
  );
};

export default SkeletonChattingListItem;
