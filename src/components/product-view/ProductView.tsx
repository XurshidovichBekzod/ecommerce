import { FC, memo } from 'react';
import ProductImage from './ProductImage';

const ProductView: FC<{ data: any[] }> = ({ data }) => {
  return (
    <>
      <div className='text-center mt-[40px]'>
        <h2 className='text-[40px] font-bold'>NEW ARRIVALS</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#fff]">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="bg-[#fff] rounded-lg  overflow-hidden"
          >
            <div className="w-full h-58 bg-[#fff]">
              <ProductImage title={item.title} image={item.images[0]} id={item.id} />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-black">{item.title}</h3>
              <p className="text-smline-clamp-2 text-[#000] font-bold text-[20px]">
                {item.description}
              </p>

              <div className="flex items-center text-[#303030] gap-1">
                <span className="text-[#000] font-bold text-[20px]  text-lg">
                  ${item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(ProductView);