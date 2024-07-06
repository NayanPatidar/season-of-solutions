"use client";
import { animate, AnimatePresence, motion } from "framer-motion"
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import React from "react";
import { initialize } from "next/dist/server/lib/render-server";
export const Faq = () => {
  const [toggle,settoggle]=useState(false);
  function handler() {
    settoggle(!toggle);
  }

  return (
    <div  className=" w-full  flex items-center flex-col"  >
      <div className="w-full inset-0 bg-gradient-to-r from-[#ed6a42] to-[#e5734d] rounded-lg p-[1px] mb-2">
            <div  className="flex flex-col text-white font-impact bg-[#010913] rounded-lg w-full px-5 py-3">
                <div className="flex relative justify-between w-full pr-4"  onClick={handler}>
                  <h1 className={`text-xl w-full ${toggle && "border-b-2 "}`}>title</h1>
                  <div>
                      <button  className="absolute mt-1 " onClick={handler}>
                        {!toggle?<IoIosArrowDown/> :<IoIosArrowUp/>}
                      </button>      
                  </div> 
                </div>
              
                <div onClick={handler} className={`grid  overflow-hidden transition-all ease-in-out text-white text-sm ${
                toggle
                  ? "mt-2 ml-0 grid-rows-[1fr] duration-300 h-full opacity-100"
                  : "overflow-hidden mt-0 h-0 duration-300 grid-rows-[0fr] ease-out opacity-0"
                }`}>
                      <p className="text-left  text-xl">discription</p>
                </div>
                
                
              </div>
        </div>
    </div>
  );
}
