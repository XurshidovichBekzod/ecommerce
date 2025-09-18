import ProductView from '@/components/product-view/ProductView';
import Clothes from '@/components/project-componets/Clothes';
import { memo } from 'react';

const Home = async () => {
  const response = await fetch("https://api.errorchi.uz/product?limit=4", { next: { revalidate: 60 } })
  const data = await response.json()

  return (
    <div className="mx-auto">
      <Clothes></Clothes>
      <div className='container'>
        <ProductView data={data?.data?.allProducts} />
      </div>
      <hr  className='container text-[grey]'/>
      <div className='container'>
        <ProductView data={data?.data?.allProducts} />
      </div>
      {/* <Testimonials/>
      <Service/> */}
    </div>
  );
};

export default memo(Home);