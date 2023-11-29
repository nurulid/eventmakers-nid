"use client";

import { Button, Input } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";

export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();
  return (
    <div className="space-y-4">
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <Button
        isDisabled={loading}
        className="w-full"
        color="primary"
        onClick={handleSubmitLogin}
      >
        Login
      </Button>
    </div>
  );
};
