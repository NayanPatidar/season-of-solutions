import Hero from "../components/Hero";
import { Faq } from "@/components/faqcomp/Faq";
import Navbar from "../components/Navbar"
import { FaqWrapper } from "@/components/faqcomp/FaqWrapper";

export default function Home() {
  return (
    <main className="relative  flex bg-black flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <div className="w-full ">
        <Hero />
        <FaqWrapper/>
      </div>
    </main>
  );
}
