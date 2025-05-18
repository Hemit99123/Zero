import React from 'react';
import { cn } from '@/lib/utils';

const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn('bg-muted animate-pulse rounded-md', className)} {...props} />;
};

export { Skeleton };
