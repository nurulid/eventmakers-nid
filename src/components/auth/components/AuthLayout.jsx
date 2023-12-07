import Link from "next/link";
import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid md:grid-cols-2">
      <div className="bg-white md:bg-yellow-600" />
      <div className="flex justify-center item-stretch md:items-center p-5">
        <section className="max-w-[450px] w-full">
          <Link href={"/"} className="mb-16 text-left block underline">Back to Homepage</Link>
          <div>{children}</div>
        </section>
      </div>
    </main>
  );
};
