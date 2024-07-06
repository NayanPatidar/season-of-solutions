import Image from "next/image"
import Link from "next/link"
import "./grad.css"

const Header = () => {
    return(
        <>
        <div className="w-full mt-32 z-10 bg-black sticky top-0 text-white rounded-full p-1 flex items-center gdsc-grad">
        <div className="w-full bg-black top-0 text-white border rounded-full p-4 flex items-center justify-between">
            <Image
                src="/logo.svg"
                className=""
                alt="/"
                width={300}
                height={10}
            ></Image>
            <div className="font-montserrat flex items-center space-x-16 pr-6">
            <Link href="#home" className="no-underline hover:underline">Home</Link>
            <Link href="#event"className="no-underline hover:underline">Event</Link>
            <Link href="#about" className="no-underline hover:underline">About</Link>
            <Link href="/registration" className="no-underline hover:underline">Registration</Link>
            </div>
        </div>
        </div>
        </>
    )
}
export default Header
