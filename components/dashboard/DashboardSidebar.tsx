"use client"
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardSidebar = () => {
    const path = usePathname();
    const Menuoption = [
      { id: 1, name: "Dashboard", path: "/dashboard", icon: PanelsTopLeft },
      { id: 2, name: "Create New", path: "/create-new", icon: FileVideo },
      { id: 3, name: "Upgrade Plan", path: "/upgrade", icon: ShieldPlus },
      { id: 4, name: "Account", path: "/account", icon: CircleUser },
    ];
  
    return (
      <div className="w-60 h-screen p-5 bg-white/80 shadow-lg rounded-r-2xl backdrop-blur-md">
        <div className="grid gap-4">
          {Menuoption.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`flex items-center gap-4 p-3 hover:bg-primary hover:scale-105 transition-transform duration-200 rounded-2xl cursor-pointer ${
                  path === item.path && "bg-primary text-white shadow-lg"
                }`}
              >
                <item.icon className="text-xl" />
                <h2 className="text-sm md:text-base font-medium text-opacity-80">
                  {item.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default DashboardSidebar;
  