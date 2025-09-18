import React from 'react'
import text from "../../app/text.png"
import images from "../../app/imges.png"
import Image from 'next/image'
import versace from "../../components/header/assets/versace.svg"
import zara from "../../components/header/assets/zara.svg"
import gucci from "../../components/header/assets/gucci.svg"
import prada from "../../components/header/assets/prada.svg"
import cevin from "../../components/header/assets/clavinklein.svg"

const Clothes = () => {
    return (
        <>
            <div className="w-full bg-[#F2F0F1]">
                <div className="container flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-[80px] pt-[40px] lg:pt-[61px]">
                    <div className="max-w-[550px] text-center lg:text-left">
                        <Image
                            src={text}
                            alt="text"
                            width={600}
                            height={40}
                            className="mx-auto lg:mx-0"
                        />
                        <p className="text-[#616060] mt-[20px] text-[14px] lg:text-[16px] leading-relaxed">
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <button className="w-[160px] mb-[20px] h-[42px] rounded-full text-white bg-black mt-[20px] hover:bg-gray-800 transition">
                            Shop Now
                        </button>
                    </div>

                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                        <Image
                            src={images}
                            alt="banner"
                            width={620}
                            height={500}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full bg-black flex items-center py-6">
                <div className="container flex flex-wrap justify-center lg:justify-between items-center gap-6">
                    <Image src={versace} alt="Versace" width={160} height={40} />
                    <Image src={zara} alt="Zara" width={80} height={40} />
                    <Image src={gucci} alt="Gucci" width={160} height={40} />
                    <Image src={prada} alt="Prada" width={160} height={40} />
                    <Image src={cevin} alt="Calvin Klein" width={180} height={40} />
                </div>
            </div>

        </>
    )
}

export default Clothes
