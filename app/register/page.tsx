// app/page.tsx
import RegistrationForm from "@/components/registration/RegistrationForm";
import Footer from "@/components/Footer";

export default function register() {

  return (
    <div className="relative min-h-screen bg-black p-10">
      {/* Background Gradient */}
      <div className="absolute z-50">
        {/* <Navbar /> */}
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-black to-transparent via-blue-800 opacity-50" />
      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen  mt-16 md:mt-2 lg:mt-4 xl:mt-0">
        <h1 className="bg-clip-text bg-gradient-to-r from-[#FEFEFE] to-[#8B8B8B] font-righteous text-center text-4xl md:text-5xl font-bold text-gray-300 mb-6 px-4">
          SEASON OF SOLUTIONS
        </h1>

        {/* Centered Registration Form */}
        <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
