"use client"
import MarketingHeader from "@/components/pages/MarketingHeader";
import { useEffect } from "react";
import { useThemeStore } from "@/src/store/theme/theme-store";
import HeroSection from "@/components/pages/MarketingHero";
import ProductShowcase from "@/components/pages/MarketingProductShowcase";

export default function MarketingPage() {
  const {theme} = useThemeStore();
  useEffect(()=>{
    document.documentElement.classList.remove("light","dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme",theme);
  },[theme]);
  return (
    <main>
      <MarketingHeader />
      <HeroSection />
      <ProductShowcase />
    </main>
  );
}
