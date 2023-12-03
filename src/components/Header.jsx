"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPath = usePathname();

  // TODO: PERUBAHAN MENU HEADER UNTUK USER DIATUR PAKE isLogin (?)
  if (currentPath.startsWith("/dashboard")) {
    return (
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl p-8">
          <div className="flex items-stretch justify-between">
            <Link href={"/"} className="font-bold">EventMakers <span className="font-normal">| Dashboard</span></Link>
            <div className="space-x-4">
              <Link href={"/dashboard/events"} className="link">My Events</Link>
              <Link href={"/dashboard/events/create"} className="btn-link">Create Event</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-stretch justify-between">
          <Link href={"/"} className="font-bold">EventMakers</Link>
          <div className="space-x-4">
            <Link href={"/login"} className="link">Login</Link>
            <Link href={"/register"} className="btn-link">Sign up</Link> 
          </div>
        </div>
      </div>
    </header>
  );
};
