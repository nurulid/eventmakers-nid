"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();

  return (
    <main className="space-y-5">
      <h1 className="font-serif text-4xl text-center font-bold">Login</h1>
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
        onChange={handleChange}
        type="password"
        radius="full"
        variant="bordered"
      />
      <Button
        isLoading={loading}
        isDisabled={loading}
        color="warning"
        radius="full"
        size="lg"
        onClick={handleSubmitLogin}
        className="w-full"
      >
        Login
      </Button>
      <div className="flex gap-1">
        <div>Don't have an account ?</div>
        <Link href="/register" className="text-yellow-600">Register</Link>
      </div>
    </main>
  );
};
