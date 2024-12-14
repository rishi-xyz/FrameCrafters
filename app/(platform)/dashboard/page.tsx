"use client";
import { EmptyVideoList } from '@/components/dashboard/EmptyVideoList';
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useState } from 'react'

const DashboardPage = () => {
  const [videolist, setVideolist] = useState([]);
  return (
    <div className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#8B4513,#F5F5DC_80%)] p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
          Dashboard
        </h2>
        <Link href={"/create-new"}>
          <Button>Create New</Button>
        </Link>
      </div>
      {videolist.length === 0 && (
        <div>
          <EmptyVideoList />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;