"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const MarketingHeader = () => {
  const router = useRouter();
  console.log("Router object:", router);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#8B4513]/30">
      {/* Productivity Boost Banner */}
      <div className="hidden md:flex justify-center items-center py-3 text-sm gap-3 bg-gradient-to-r from-[#8B4513] to-[#D2B48C] text-white">
        <div className="inline-flex gap-2 items-center">
          <p>Boost your productivity and streamline your workflow. Get started now</p>
          <ArrowRight width={15} height={15} />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="hidden md:flex py-1 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex gap-6 items-centerk" role="navigation">
            <a href="#about" className="hover:text-[#8B4513]">About</a>
            <a href="#features" className="hover:text-[#8B4513]">Features</a>
            <a href="#footer" className="hover:text-[#8B4513]">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={()=>router.push("/sign-up")} variant={"outline"} className="btn rounded-2xl">
              Sign up
            </Button>
            <Button onClick={()=>router.push("/sign-in")} variant={"outline"} className="btn rounded-2xl">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
