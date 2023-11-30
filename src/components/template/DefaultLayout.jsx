"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";


export const DefaultLayout = ({ children }) => {
  const currentPath = usePathname();

  if(currentPath === "/login" || currentPath === "/register") {
    return (
      <>{children}</>
    )
  }

  return (
    <>
      <Header/>
      <main className="h-full max-w-7xl mx-auto p-6">{children}</main>
      <Footer />
    </>
  );
};
