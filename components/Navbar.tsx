"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useContext } from "react";
import "./nav.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase/init";
import { AuthProvider, useAuth } from "@/context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { user, loading, signInWithGooglePopup, signOutUser } = useAuth();

  const sections = [
    { href: "/#home", name: "Home" },
    { href: "/#timeline", name: "Timeline" },
    { href: "/#showcase", name: "Showcase" },
    { href: "/#faq", name: "FAQ" },
  ];

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      console.log("User signed in");
    } catch (error: any) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="left-[12px] w-[calc(100%-24px)] mb-10 p-[2px] z-[9999999] bg-black fixed top-5 text-white rounded-full grad flex items-center ">
        <div className="w-full inset-0 bg-black top-0 text-white rounded-full p-4 flex items-center justify-between ">
          <Image
            src="/logo.svg"
            className="w-56 md:w-60 lg:w-60 xl:w-64"
            alt="GDSC Logo"
            width={300}
            height={10}
          />

          <button
            ref={buttonRef}
            className="block lg:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`font-montserrat lg:pr-6 lg:flex lg:items-center lg:space-x-16 ${
              isOpen ? "hidden" : "hidden"
            }`}
          >
            {sections.map((link) => (
              <div key={link.href} className="under">
                <Link href={link.href}>{link.name}</Link>
              </div>
            ))}
            {user ? (
              <div style={{ cursor: "pointer" }}>
                <Link href={"/dashboard"} style={{ cursor: "pointer" }}>
                  Dashboard
                </Link>
              </div>
            ) : (
              <div>
                <span style={{ cursor: "pointer" }} onClick={signInWithGoogle}>
                  Login
                </span>
              </div>
            )}
          </div>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-16 left-0 w-full border text-white bg-black rounded-md shadow-lg z-20 lg:hidden"
            >
              {sections.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat block px-4 py-2 hover:text-black hover:bg-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <div>
                  <Link
                    className="font-montserrat block px-4 py-2 hover:text-black hover:bg-gray-300"
                    href={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (
                <div>
                  <span
                    className="font-montserrat block px-4 py-2 hover:text-black hover:bg-gray-300"
                    onClick={signInWithGoogle}
                  >
                    Login
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
