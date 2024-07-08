import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import React from "react";
import "./Faq.css";

interface FaqProps {
  question: string;
  answer: string[];
  id: number;
  isActive: boolean;
  onclick: () => void;
}

export const Faq: React.FC<FaqProps> = ({ question, answer, id, isActive, onclick }) => {
  return (
    <div className="w-full flex items-center sm:px-5 lg:px-50 flex-col">
      <div className="w-full inset-0 grad rounded-lg bgclr p-[1px] lg:mb-6 mb-5">
        <div className="flex flex-col text-white font-impact bgclr shadow-inner shadow-gray-500 rounded-lg w-full px-5 py-3">
          <div className="flex relative justify-between w-full p-1 md:p-3 lg:p-6 pr-4" onClick={onclick}>
            <h1 className={`text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl w-full ${isActive ? "border-b-2 border-slate-400" : ""}`}>{question}</h1>
            <div className="md:mr-5 lg:mr-10">
              <button className="absolute mt-1 md:mt-2 lg:mt-2 xl:mt-3">
                {!isActive ? <BiSolidDownArrow className="font-bold md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" /> : <BiSolidUpArrow className="font-bold md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />}
              </button>
            </div>
          </div>
            <div className={`grid overflow-hidden transition-all ease-in-out text-white text-sm ${isActive&& "mt-2 mb-2 ml-0 grid-rows-[1fr] duration-300 h-full opacity-100"}`}>
              
              <ul className="text-left p-1 md:p-3 lg:p-6 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
                {answer.map((ans, index) => (
                  <li className="mb-2" key={index}>
                    {ans}
                  </li>
                ))}
                {id === 4 && (
                  <li className="inline-block text-[#41CDF6]">
                    <a href="#">Click Here!</a>
                  </li>
                )}
                {id === 6 && (
                  <li className="inline-block text-[#41CDF6]">
                    <a href="mailto:someone@example.com">someone@example.com</a>
                  </li>
                )}
              </ul>
            </div>
          
        </div>
      </div>
    </div>
  );
};
