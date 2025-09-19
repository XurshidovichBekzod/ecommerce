import Image from "next/image";
import { memo } from "react";
import stars from "@/components/header/assets/Frame 10.svg";
import frame from "@/components/header/assets/Frame.png"

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data;


  return (
    <>
    <div className="Page container pt-[70px] bg-[#fff]  flex gap-[30px]">
      <div>
        <Image
          src={"https://api.errorchi.uz/product/image/" + product?.images[0]}
          width={500}
          alt={product?.title || "Product image"}
          height={300}
        />
      </div>
      <div>
        <h1 className="text-[40px] font-bold">{product?.title}</h1>
        <div className="mt-[20px]">
          <Image
            src={stars}
            width={200}
            height={40}
            alt="stars"
          />
        </div>
        <p className="mt-[8px]">{product?.description}</p>
        <p className="font-bold mt-[10px] text-[20px]">${product?.price}</p>
        <hr className="mt-[10px]" />
        <div className="flex gap-[15px] mt-[15px]">
          <div className="w-[30px] h-[30px] rounded-full cursor-pointer bg-[#31344F]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#314F4A] cursor-pointer"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#4F4631] cursor-pointer"></div>
        </div>
        <div className="flex gap-[15px] mt-[20px]">
          <button className="border w-[120px] h-[30px] rounded-2xl bg-[#000] text-white">Shop</button>
          <button className="border w-[120px] h-[30px] rounded-2xl bg-[#000] text-white">- 1 +</button>
        </div>
      </div>
    </div>
     <div className="container">
      <div className="mt-[40px] text-center lg:text-left">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold">
          OUR HAPPY CUSTOMERS
        </h2>
      </div>
      <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full border border-[#E6E6E6] rounded-2xl p-5">
          <Image src={stars} alt="Stars" width={160} height={40} />
          <div className="flex items-center mt-[12px] gap-2">
            <h2 className="font-bold text-[18px] sm:text-[20px]">Sarah M.</h2>
            <Image src={frame} alt="Verified" width={20} height={20} />
          </div>
          <p className="mt-[5px] text-[14px] sm:text-[15px] text-black/80 leading-relaxed">
            "I'm blown away by the quality and style of the clothes I received from Shop.co. 
            From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
          </p>
        </div>

    
        <div className="w-full border border-[#E6E6E6] rounded-2xl p-5">
          <Image src={stars} alt="Stars" width={160} height={40} />
          <div className="flex items-center mt-[12px] gap-2">
            <h2 className="font-bold text-[18px] sm:text-[20px]">John D.</h2>
            <Image src={frame} alt="Verified" width={20} height={20} />
          </div>
          <p className="mt-[5px] text-[14px] sm:text-[15px] text-black/80 leading-relaxed">
            "The delivery was super fast and the packaging was top-notch. 
            I’ll definitely be shopping here again!”
          </p>
        </div>

        <div className="w-full border border-[#E6E6E6] rounded-2xl p-5">
          <Image src={stars} alt="Stars" width={160} height={40} />
          <div className="flex items-center mt-[12px] gap-2">
            <h2 className="font-bold text-[18px] sm:text-[20px]">Emily R.</h2>
            <Image src={frame} alt="Verified" width={20} height={20} />
          </div>
          <p className="mt-[5px] text-[14px] sm:text-[15px] text-black/80 leading-relaxed">
            "Customer support was very helpful when I had questions about sizing. 
            They made sure I got the perfect fit.”
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default memo(Detail);
