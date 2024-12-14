import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FrameCrafters",
  description: "Crafting Frames That Speak ",
  icons: {
    icon: "framecrafters.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterMultiSessionSingleSignOutUrl={"/"}
      afterSignOutUrl={"/"}

      appearance={{
        baseTheme: dark,
      }}
    >
      <Provider>
        <html lang="en">
          <body
            className={cn(twMerge(inter.className, "antialiased min-h-screen"))}
          >
            {children}
          </body>
        </html>
      </Provider>
    </ClerkProvider>
  );
}
