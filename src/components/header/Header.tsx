'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import shop from "../header/assets/shop.svg"
import Image from 'next/image';
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const rout = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="h-full px-4 md:px-6 container mx-auto flex justify-between items-center text-black">

          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src={shop}
              alt="logo"
              width={100}
              height={40}
              className="border"
            />
          </div>

          {/* Desktop links */}
          <div className='hidden md:flex text-[#000] gap-[30px] ml-[40px] text-[16px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/login"}>Login</Link>
          </div>

          {/* Search + Sign in (desktop) */}
          <div className='hidden md:flex items-center'>
            <div className="w-[300px] lg:w-[500px] mr-[20px] flex items-center h-[35px] border border-[#F0F0F0] rounded-[20px] bg-[#F0F0F0] px-3 py-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <button
              onClick={handleSignIn}
              className='border w-[90px] h-[35px] rounded-[8px] cursor-pointer bg-[#000] text-[#fff]' >
              Sign in
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
            <Link href={"/"} className="block">Home</Link>
            <Link href={"/about"} className="block">About</Link>
            <Link href={"/contact"} className="block">Contact</Link>
            <Link href={"/login"} className="block">Login</Link>

            <div className="flex items-center mt-3">
              <div className="flex items-center w-full border border-[#F0F0F0] rounded-[20px] bg-[#F0F0F0] px-3 py-2">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              <button
                onClick={handleSignIn}
                className='ml-3 border px-4 h-[35px] rounded-[8px] cursor-pointer bg-[#000] text-[#fff]'>
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Header);
