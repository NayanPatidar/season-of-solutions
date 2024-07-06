// "use client";
// import { animate, AnimatePresence, motion } from "framer-motion";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { useState } from "react";
// import React from "react";
// import "./Faq.css";

// interface FaqProps {
//   question: string;
//   answer: string[];

// }

// export const Faq: React.FC<FaqProps> = ({ question, answer}) => {
//   const [toggle, settoggle] = useState(false);
//   let answers:string[]=answer;
//   function handler() {
//     settoggle(!toggle);
//   }

//   return (
//     <div className="w-full flex items-center flex-col">
//       <div className="w-full inset-0 grad rounded-lg bgclr p-[1px] mb-2">
//         <div className="flex flex-col text-white font-impact bgclr shadow-inner shadow-xl shadow-gray-500 rounded-lg w-full px-5 py-3">
//           <div className="flex relative justify-between w-full pr-4" onClick={handler}>
//             <h1 className={`text-xl w-full ${toggle && "border-b-2 border-slate-400"}`}>{question}</h1>
//             <div>
//               <button className="absolute mt-1" onClick={handler}>
//                 {!toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
//               </button>
//             </div>
//           </div>

//           <div onClick={handler} className={`grid overflow-hidden transition-all ease-in-out text-white text-sm ${
//             toggle
//               ? "mt-2 ml-0 grid-rows-[1fr] duration-300 h-full opacity-100"
//               : "overflow-hidden mt-0 h-0 duration-300 grid-rows-[0fr] ease-out opacity-0"
//           }`}>
//             <p className="text-left text-xl"> {answers.map((ans,index)=> (
//                             <li key={index} className="under">{ans}</li>
//                         ))}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useState, useEffect } from "react";
import React from "react";
import "./Faq.css";

interface FaqProps {
  question: string;
  answer: string[];
}

export const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [toggle, settoggle] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handler() {
    settoggle(!toggle);
  }

  return (
    <div className="w-full flex items-center sm:px-5 md:px-20 lg:px-50 flex-col">
      <div className="w-full inset-0 grad rounded-lg bgclr p-[1px]   lg:mb-6 mb-5">
        <div className="flex flex-col text-white font-impact bgclr shadow-inner  shadow-gray-500 rounded-lg w-full  px-5 py-3">
          <div className="flex relative justify-between w-full  pr-4" onClick={handler}>
            <h1 className={`text-lg sm:text-xl  md:text-3xl lg:text-4xl xl:text-5xl w-full ${toggle && "border-b-2 border-slate-400 "}`}>{question}</h1>
            <div>
              <button className="absolute  mt-1 md:mt-2 lg:mt-2 xl:mt-3 " onClick={handler}>
                {!toggle ? <BiSolidDownArrow className="font-bold  md:w-5 md:h-5  lg:w-6 lg:h-6 xl:w-7 xl:h-7"/> : <BiSolidUpArrow className="font-bold  md:w-5 md:h-5  lg:w-6 lg:h-6 xl:w-7 xl:h-7"/>}
              </button>
            </div>
          </div>

          {isClient && (
            <div className={`grid overflow-hidden transition-all ease-in-out text-white text-sm ${
              toggle
                ? "mt-2 ml-0 grid-rows-[1fr] duration-300 h-full opacity-100"
                : "overflow-hidden mt-0 h-0 duration-300 grid-rows-[0fr] ease-out opacity-0"
            }`}>
              <ul className="text-left text-sm sm:text-xl  md:text-3xl lg:text-4xl xl:text-5xl" >
                {answer.map((ans, index) => (
                  <li key={index} >{ans}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
