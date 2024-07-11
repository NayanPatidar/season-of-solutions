"use client";
import DashboardBar from "@/components/DashboardBar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const route = useRouter();
  console.log(user);

  return (
    <>
      {" "}
      {user ? (
        <div className="relative min-h-screen bg-black">
          <div className="bg-gradient-to-bl from-black to-transparent via-blue-800 w-full h-full min-h-screen flex flex-col md:flex-row items-center pt-24 px-2">
            <DashboardBar />
            <div className="w-full md:w-4/5 h-[24rem] bg-white text-black rounded-md lg:ml-6 md:ml-2 md:mt-0 mt-5 ">
              {children}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
