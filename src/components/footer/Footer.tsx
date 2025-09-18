import { memo } from "react"
import Image from "next/image";
import logo from "@/components/header//assets/shop.svg"
import visa from "@/components/header/assets/Frame 53.svg"



const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] h-[550px] mt-[150px]">
      <div className="container">
        <footer className="relative">
          <div className="w-full bg-black absolute -top-[90px] -right-1/2 left-1/2 -translate-x-1/2 h-[180px] rounded-[20px] px-[64px] py-[36px] flex justify-between items-center">
            <h2 className="font-bold text-[40px] leading-[112%] text-white max-w-[551px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="flex flex-col justify-center items-center gap-[12px]">
              <input type="text" placeholder="Enter your email address" className="font-medium text-[16px] bg-[#fff] w-[340px] pl-[10px] py-[12px] rounded-[62px] duration-300 hover:bg-[#f3f3f3]" />
              <button className="font-medium text-[16px] bg-[#fff] px-[89px] py-[12px] rounded-[62px] duration-300 hover:bg-[#f3f3f3] active:scale-[0.97]">Subscribe to Newsletter</button>
            </div>
          </div>
          <div className="pt-[140px] flex justify-between items-center mb-[50px]">
            <div className="max-w-[248px]">
              <Image src={logo} alt="logo" className='mb-[25px]' />
              <p className="font-normal text-[14px] leading-[157%] text-black/[0.6] mb-[35px]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            </div>
            <div className="max-w-[100px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">Company</h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6] mb-[20px]">About</p>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6] mb-[20px]">Features</p>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6] mb-[20px]">Works</p>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6]">Csreer</p>
            </div>
            <div className="max-w-[156px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">
                Help
              </h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Customer Support
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Delivery Details
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Terms & Conditions
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60">
                Privacy Policy
              </p>
            </div>
            <div className="max-w-[149px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">
                FAQ
              </h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Account
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Manage Deliveries
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Orders
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60">
                Payments
              </p>
            </div>
            <div className="max-w-[169px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">
                Resources
              </h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Free eBooks
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Development Tutorial
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                How to - Blog
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60">
                Youtube Playlist
              </p>
            </div>
          </div>
          <hr className="text-[#000]/[0.1] mb-[25px]" />
          <div className="w-full flex justify-between items-center">
            <p className="font-normal text-[14px] text-[#000]/[0.6]">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex items-center">
              <Image src={visa} alt="card1" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default memo(Footer);