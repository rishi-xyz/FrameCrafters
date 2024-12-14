"use client"
import MarketingHeader from "@/components/MarketingHeader";
import { useEffect } from "react";
import { useThemeStore } from "@/src/store/theme/theme-store";
import HeroSection from "@/components/MarketingHero";
import ProductShowcase from "@/components/MarketingProductShowcase";

export default function MarketingPage() {
  const {theme} = useThemeStore();
  useEffect(()=>{
    document.documentElement.classList.remove("light","dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme",theme);
  },[theme]);
  return (
    <div>
      <MarketingHeader />
      <HeroSection />
      <ProductShowcase />
    </div>
  );
}
