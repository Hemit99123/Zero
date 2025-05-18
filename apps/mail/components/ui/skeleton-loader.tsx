'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

export function Skeleton({ className, asChild, ...props }: SkeletonProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        'animate-pulse bg-muted rounded-md',
        className
      )}
      {...props}
    />
  );
}
