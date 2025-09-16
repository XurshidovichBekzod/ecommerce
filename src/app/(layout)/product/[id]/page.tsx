import Image from "next/image";
import { memo } from "react";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data

  return (
    <div className="Page bg-[#ccddfd] h-[91vh]">
      <Image
        src={"https://api.errorchi.uz/product/image/" + product?.images[0]}
        width={300}
        alt={product?.title}
        height={300}
      />
      <h1>{product?.title}</h1>
    </div>
  );
};

export default memo(Detail);
