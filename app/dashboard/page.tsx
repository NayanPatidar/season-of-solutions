"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  return (
    <>
      <div className=" p-5">This is Status Component</div>
    </>
  );
}
