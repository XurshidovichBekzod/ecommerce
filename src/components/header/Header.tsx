'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import shop from "../header/assets/shop.svg"
import Image from 'next/image';
import { Search } from "lucide-react";

const Header = () => {
  const rout = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignIn = () => {
    open("https://dashbord-5ekh.vercel.app/")
  }

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 bg-[#fff] shadow-sm transition-all duration-300 ${isScrolled ? "h-[55px]" : "h-[65px]"}`}>
        <div className="h-full px-6 container mx-auto flex justify-between items-center text-black">

          <div className='flex items-center'>
            <div>
              <Image
                src={shop}
                alt="logo"
                width={120}
                height={40}
                className="border"
              />
            </div>
            <div className='text-[#000] gap-[30px] flex ml-[40px] text-[16px]'>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/login"}>Login</Link>
            </div>
          </div>

          <div className='flex items-center'>
            <div className="w-[750px] mr-[40px] max-w-[600px] flex items-center h-[35px] border border-[#F0F0F0] rounded-[20px] bg-[#F0F0F0] px-3 py-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <button
              onClick={handleSignIn}
              className='border w-[100px] h-[35px] rounded-[8px] cursor-pointer bg-[#000] text-[#fff]'>
              sign in
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default memo(Header);
