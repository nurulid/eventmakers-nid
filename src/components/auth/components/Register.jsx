"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";
import Loading from "@/app/loading";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="space-y-5">
      <h1 className="font-serif text-4xl text-center font-bold">Register</h1>
      <Input
        name="name"
        placeholder="name"
        onChange={handleChange}
        radius="full"
        variant="bordered"
      />
      <Input
        name="email"
        placeholder="email@domain.com"
        onChange={handleChange}
        radius="full"
        variant="bordered"
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
        radius="full"
        variant="bordered"
      />
      <Button
        isLoading={loading}
        isDisabled={loading}
        onClick={handleSubmitRegister}
        color="warning"
        radius="full"
        size="lg"
        className="w-full"
      >
        Register
      </Button>
      <div className="flex gap-1">
        <div>Have an account ?</div>
        <Link href="/login" className="text-yellow-600">
          Login
        </Link>
      </div>
    </main>
  );
};
