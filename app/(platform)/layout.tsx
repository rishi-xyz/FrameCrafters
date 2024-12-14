import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="hidden md:block h-screen rounded-r-2xl text-black fixed mt-[75px] bg-[radial-gradient(ellipse_200%_100%_at_top_left,#8B4513,#F5F5DC_80%)] shadow-lg backdrop-blur-lg">
        <DashboardSidebar />
      </div>
      <div>
        <div className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8B4513,#F5F5DC_80%)] shadow-md backdrop-blur-lg">
          <DashboardHeader />
        </div>
        <div className="md:ml-60 py-6 px-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;