"use client";
import { Suspense } from "react";
import Login from "@/app/components/Login/Login";

export default function LoginBase() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
