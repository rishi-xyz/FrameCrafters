"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import frameCrafter from "@/assets/framecrafters.png"
import Link from "next/link";

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8B4513,#F5F5DC_80%)]"
    >
      <div className="container px-4 mx-auto">
        <div className="md:flex items-center pl-5">
          {/* Left Section */}
          <div className="md:w-[478px]">
            <div className="text-sm bg-brown-light/30 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-[#8B4513]/70 hover:scale-105 transition-transform duration-300">
                Version 2.0 is here
              </span>
              <span className="text-[#8B4513] italic hover:scale-105 transition-transform duration-300">
                {"— Brown and beige never looked this good!"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-24 text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
              FrameCrafters
            </h1>
            <p className="text-xl tracking-tight mt-6 text-[#4B2E15]">
              where every frame is crafted to inspire and engage.
            </p>
            <div className="flex gap-4 items-center mt-8">
              <Link href={"/dashboard"}>
                <Button className="btn rounded-xl cursor-pointer">Start Now</Button>
              </Link>
              <button className="gap-1 flex" aria-label="Learn more">
                <span className="text-black text-base">Learn more</span>
                <ArrowRight width={15} height={15} color="black" className="mt-1 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative lg:left-36">
            <Image src={frameCrafter} alt="framce craftger icon" width={650} height={650} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;