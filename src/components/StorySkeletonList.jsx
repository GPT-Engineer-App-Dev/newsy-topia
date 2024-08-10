import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const StorySkeletonList = () => {
  return (
    <ul className="space-y-8">
      {[...Array(10)].map((_, index) => (
        <li key={index} className="border-b border-gray-800 pb-6">
          <Skeleton className="h-8 w-3/4 mb-2 bg-gray-800" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-1/4 bg-gray-800" />
            <Skeleton className="h-4 w-1/6 bg-gray-800" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StorySkeletonList;