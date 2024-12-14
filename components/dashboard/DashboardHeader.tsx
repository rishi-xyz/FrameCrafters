import Image from 'next/image'
import React from 'react'
import frameCrafterlogo from "@/assets/framecrafters.png"
import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'

const DashboardHeader = () => {
  return (
    <div className="p-4 px-6 flex items-center justify-between bg-white/80 shadow-md rounded-r-xl backdrop-blur-md">
      <div className="flex gap-4 items-center">
        <div className="rounded-full p-2 bg-gradient-to-b from-[#8B4513] to-[#F5F5DC] shadow-md">
          <Image src={frameCrafterlogo} alt="FrameCrafters Logo" width={40} height={40} />
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
          FrameCrafters
        </h2>
      </div>
      <div className="flex gap-6 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
