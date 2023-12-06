"use client"

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    localStorage.removeItem("userData");

    router.refresh();
    setTimeout(() => router.push("/login"), 1000);
  };

  return {
    handleLogout,
  };
};
