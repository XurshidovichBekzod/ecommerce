import { FC, memo } from 'react';
import ProductImage from './ProductImage';

const ProductView: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#e3f1ff] min-h-screen">
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="bg-[#fff] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="w-full h-48 bg-[#fff]">
            <ProductImage title={item.title} image={item.images[0]} id={item.id} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            <p className="text-smline-clamp-2 text-[#303030]">Description: <span>
              {item.description}
            </span>
            </p>

            <div className="flex items-center text-[#303030] gap-1">
              Price: 
              <span className="text-black font-bold text-lg">
                ${item.price}
              </span>
            </div>

            <div className="text-sm text-black space-y-1">
              <p className="truncate">
                <span className="font-medium text-[#303030]">User: </span>
                 {item.user?.fname}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductView);