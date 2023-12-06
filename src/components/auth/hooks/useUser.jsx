"use client";

import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState(null);

    // store userData yang di localStorage ke sini, biar bisa digunakan di client component **untuk penggunaan di server component pake cookies**
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);
  }, []);

  return { user };
};
