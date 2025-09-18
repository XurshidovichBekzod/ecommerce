import Image from "next/image";
import { memo } from "react";
import stars from "@/components/header/assets/Frame 10.svg";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data;


  return (
    <div className="Page container pt-[70px] bg-[#fff] h-[91vh] flex gap-[30px]">
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
  );
};

export default memo(Detail);
