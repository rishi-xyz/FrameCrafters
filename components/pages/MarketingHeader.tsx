import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { useThemeStore } from "@/src/store/theme/theme-store";

const MarketingHeader = () => {
  const { theme, toggleTheme } = useThemeStore(); // get theme and toggleTheme from Zustand store

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-primary/30">
      {/* Productivity Boost Banner */}
      <div className="hidden md:flex justify-between items-center py-3 text-sm gap-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground ">
        <div className="inline-flex gap-2 items-center justify-center mx-4">
          <p>Boost your productivity and streamline your workflow. Get started now</p>
          <ArrowRight width={15} height={15} />
        </div>

        {/* Switch to toggle theme */}
        <Switch
          checked={theme === "dark"}
          onCheckedChange={toggleTheme} // use toggleTheme from Zustand
        />
      </div>

      {/* Main Navigation */}
      <div className="hidden md:flex py-1 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex gap-6 items-center text-primary-foreground" role="navigation">
            <a href="#about" className="hover:text-secondary-foreground">About</a>
            <a href="#features" className="hover:text-secondary-foreground">Features</a>
            <a href="#footer" className="hover:text-secondary-foreground">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button variant={"outline"} className="btn rounded-2xl">
              Sign up
            </Button>
            <Button variant={"outline"} className="btn rounded-2xl">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
