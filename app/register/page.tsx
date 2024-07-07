// app/page.tsx
import RegistrationForm from "@/components/registration/RegistrationForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Gradient */}
      <Navbar/>
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-black to-transparent via-blue-800 opacity-50" />
      {/* Heading */}
     
      <h1 className="absolute top-40 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-gray-300 z-10">
        SEASON OF SOLUTIONS
      </h1>
      {/* Centered Registration Form */}
      <div className="flex items-center justify-center min-h-screen">
        <RegistrationForm className="relative z-10" />
      </div>
    </div>
  );
}
