"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

const ProductImage: FC<{ title: string; image?: string; id: number }> = ({
  title,
  image,
  id,
}) => {
  const router = useRouter();

  const fallbackText = "Rasm mavjud emas";

  return (
    <div
      className="relative w-full h-48 bg-black overflow-hidden cursor-pointer flex items-center justify-center"
      onClick={() => router.push(`/product/${id}`)}
    >
      {image ? (
        <Image
          src={`https://api.errorchi.uz/product/image/${image}`}
          alt={title}
          fill
          className="object-cover"
        />
      ) : (
        <span className="text-white text-sm">{fallbackText}</span>
      )}
    </div>
  );
};

export default memo(ProductImage);
