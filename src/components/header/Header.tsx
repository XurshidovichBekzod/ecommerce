'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo } from 'react';


const Header = () => {
  const rout = useRouter()
  const handleSignIn = () => {
    open("https://dashbord-5ekh.vercel.app/")
  }
  return (
    <div className="p-4 text-black flex bg-[#F5F5F5] justify-between items-center">
      <div>
        <h2 className='text-[#659bff] font-bold text-[20px] cursor-pointer' onClick={() => rout.back()}>E-commerce</h2>
      </div>
      <div className=' text-[#659bff] gap-[30px] flex ml-[10px]'>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/login"}>Login</Link>
      </div>
      <div>
        <button onClick={handleSignIn} className='border w-[100px] h-[35px] rounded-[8px] cursor-pointer bg-[#659bff] text-[#fff]'>sign in</button>
      </div>
    </div>
  );
};

export default memo(Header);