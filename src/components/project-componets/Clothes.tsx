import React from 'react'
import text from "../../app/text.png"
import images from "../../app/imges.png"
import Image from 'next/image'

const Clothes = () => {
    return (
        <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between bg-[#F2F0F1] px-6 lg:px-[80px] pt-[40px] lg:pt-[61px] gap-10'>
            
            {/* Chap qism */}
            <div className='max-w-[550px] text-center lg:text-left'>
                <Image
                    src={text}
                    alt="text"
                    width={400}
                    height={40}
                    className="mx-auto lg:mx-0"
                />
                <p className='text-[#616060] mt-[20px] text-[14px] lg:text-[16px] leading-relaxed'>
                    Browse through our diverse range of meticulously crafted garments,
                    designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className='w-[160px] h-[42px] rounded-full text-white bg-black mt-[20px]'>
                    Shop Now
                </button>
            </div>

            {/* O‘ng qism */}
            <div className='flex-shrink-0'>
                <Image
                    src={images}
                    alt="banner"
                    width={520}
                    height={500}
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    )
}

export default Clothes
