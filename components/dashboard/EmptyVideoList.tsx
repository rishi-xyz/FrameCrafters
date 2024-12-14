import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const EmptyVideoList = () => {
  return (
    <div className="p-6 py-20 flex items-center flex-col mt-6 border-2 border-dashed border-[#4B2E15] rounded-xl bg-white/80 shadow-lg backdrop-blur-md">
      <h2 className="text-[#4B2E15] m-3 text-lg tracking-tight">
        You don't have any short videos created yet.
      </h2>
      <Link href={"/create-new"}>
        <Button className="px-6 py-3 text-lg bg-primary hover:bg-primary/80">
          Create New Short Video
        </Button>
      </Link>
    </div>
  );
};