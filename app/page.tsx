import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main className="relative h-screen flex bg-black flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <div className="w-full ">
        <Hero />
      </div>
    </main>
  );
}
