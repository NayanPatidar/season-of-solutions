"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import "./grad.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const sections = [
        { href: "#home", name: "Home" },
        { href: "#event", name: "Event" },
        { href: "#about", name: "About" },
        { href: "/register", name: "Register" },
    ];

    useEffect(() => {
        const handleClickOutside = () => {
            if (dropdownRef.current) {
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
            <div className="w-full mt-32 z-10 bg-black sticky top-0 text-white rounded-full p-1 flex items-center gdsc-grad">
                <div className="w-full bg-black top-0 text-white border rounded-full p-4 flex items-center justify-between">
                    <Image
                        src="/logo.svg"
                        className="w-48 md:w-72 lg:w-72 xl:w-80"
                        alt="GDSC Logo"
                        width={300}
                        height={10}
                    />

                    <button className="block lg:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    <div className={`font-montserrat lg:pr-6 lg:flex lg:items-center lg:space-x-16 ${isOpen ? "hidden" : "hidden"} lg:block`}>
                        {sections.map(link => (
                            <Link key={link.href} href={link.href} className="no-underline hover:underline">{link.name}</Link>
                        ))}
                    </div>

                    {isOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute top-16 left-0 w-full border text-white bg-black rounded-md shadow-lg z-20 lg:hidden"
                        >
                            {sections.map(link => (
                                <Link key={link.href} href={link.href} className="font-montserrat block px-4 py-2 hover:bg-gray-200 hover:text-black" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header
