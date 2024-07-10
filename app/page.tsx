import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { FaqWrapper } from "@/components/faqcomp/FaqWrapper";
import Script from "next/script";
import Timeline from "@/components/Timeline";
import Showcase from "@/components/Photos-Showcase";

export default function Home() {
  return (
    <main className="relative flex bg-black flex-col items-center justify-center overflow-x-hidden mx-auto h-full w-full">
      <div className="px-4 w-full pt-4">
        <Navbar />
      </div>
      <div className="w-full h-screen">
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
        <Hero />
      </div>
      <Timeline />
      <Showcase />
      <FaqWrapper />
      <Footer />
    </main>
  );
}
