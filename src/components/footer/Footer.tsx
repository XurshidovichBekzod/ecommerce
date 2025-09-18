import { memo } from "react";
import Image from "next/image";
import logo from "@/components/header/assets/shop.svg";
import visa from "@/components/header/assets/Frame 53.svg";

const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] mt-[150px]">
      <div className="container">
        <footer className="relative">
          {/* Top Subscribe Section */}
          <div className="w-full bg-black absolute -top-[90px] left-1/2 -translate-x-1/2 h-auto rounded-[20px] px-6 lg:px-[64px] py-[36px] flex flex-col lg:flex-row justify-between items-center gap-6">
            <h2 className="font-bold text-[28px] lg:text-[40px] leading-[120%] text-white max-w-[551px] text-center lg:text-left">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col w-full max-w-[340px] gap-[12px]">
              <input
                type="text"
                placeholder="Enter your email address"
                className="font-medium text-[16px] bg-white w-full pl-[10px] py-[12px] rounded-[62px] duration-300 hover:bg-[#f3f3f3]"
              />
              <button className="font-medium text-[16px] bg-white w-full py-[12px] rounded-[62px] duration-300 hover:bg-[#f3f3f3] active:scale-[0.97]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>


          <div className="pt-[200px] flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0 mb-[50px]">
            
            <div className="max-w-[248px]">
              <Image src={logo} alt="logo" className="mb-[25px]" />
              <p className="font-normal text-[14px] text-black/60 mb-[35px] pr-[20px]">
                We have clothes that suit your style and which you’re proud to wear. From women to men.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 w-full">
              
              <div>
                <h3 className="font-medium text-[16px] text-black mb-[22px] tracking-[0.19em] uppercase">
                  Company
                </h3>
                <ul className="space-y-3 text-black/60 text-[14px]">
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="font-medium text-[16px] text-black mb-[22px] tracking-[0.19em] uppercase">
                  Help
                </h3>
                <ul className="space-y-3 text-black/60 text-[14px]">
                  <li>Customer Support</li>
                  <li>Delivery Details</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-medium text-[16px] text-black mb-[22px] tracking-[0.19em] uppercase">
                  FAQ
                </h3>
                <ul className="space-y-3 text-black/60 text-[14px]">
                  <li>Account</li>
                  <li>Manage Deliveries</li>
                  <li>Orders</li>
                  <li>Payments</li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-medium text-[16px] text-black mb-[22px] tracking-[0.19em] uppercase">
                  Resources
                </h3>
                <ul className="space-y-3 text-black/60 text-[14px]">
                  <li>Free eBooks</li>
                  <li>Development Tutorial</li>
                  <li>How to - Blog</li>
                  <li>YouTube Playlist</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <hr className="text-[#000]/10 mb-[25px]" />
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="font-normal text-[14px] text-[#000]/60 text-center sm:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center">
              <Image src={visa} alt="payment methods" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default memo(Footer);
