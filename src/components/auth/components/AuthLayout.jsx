import Link from "next/link";
import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-2">
      <div className="bg-gradient-to-r from-green-400 to-blue-500" />
      <div className="flex justify-center items-center p-5">
        <section className="w-[350px]">
          <Link href={"/"} className="mb-6 text-left block underline">Back to Homepage</Link>
          <div>{children}</div>
        </section>
      </div>
    </main>
  );
};
