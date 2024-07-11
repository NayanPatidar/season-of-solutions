"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const DashboardBar = () => {
  const [option, setOption] = useState(1);
  const router = useRouter();
  const { user, loading, signInWithGooglePopup, signOutUser } = useAuth();

  const signOutWithGoogle = async () => {
    try {
      router.push("/");
      await signOutUser();
      console.log("User signed out successfully");
    } catch (error: any) {
      console.error("Error signing out:", error.message);
    }
  };

  const changeOption = (value: number) => {
    if (value == 1) {
      console.log("Status Clicked");
    } else {
      console.log("Signout Clicked");
      router.push("/");
      signOutWithGoogle();
    }
    setOption(value);
  };

  return (
    <>
      <div className="font-montserrat w-full md:w-1/5 h-[2rem] md:h-[24rem] bg-white text-white rounded-md mx-6 md:mx-0 mt-5 md:mt-0 flex md:flex-col flex-row md:gap-[1px]">
        <button
          className="w-full bg-slate-600 hover:bg-slate-950 h-10 md:text-xl text-md"
          onClick={() => changeOption(1)}
          style={{ backgroundColor: option == 1 ? "#020617" : "" }}
        >
          STATUS
        </button>
        <button
          className="w-full bg-slate-600 hover:bg-slate-950 h-10 md:text-xl "
          onClick={() => changeOption(2)}
          style={{ backgroundColor: option == 2 ? "#020617" : "" }}
        >
          SIGNOUT
        </button>
      </div>
    </>
  );
};

export default DashboardBar;
