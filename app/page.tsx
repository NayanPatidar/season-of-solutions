import Image from "next/image";
import Hero from "../components/Hero";
import { Faq } from "@/components/faqcomp/Faq";

export default function Home() {
  return (
    <main className="relative h-screen flex bg-black flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full ">
        <Hero />
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        
      </div>
    </main>
  );
}
