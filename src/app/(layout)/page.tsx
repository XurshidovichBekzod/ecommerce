import ProductView from '@/components/product-view/ProductView';
import Clothes from '@/components/project-componets/Clothes';
import Messages from '@/components/project-componets/Messages';
import { memo } from 'react';

const Home = async () => {
  const response = await fetch("https://api.errorchi.uz/product?limit=8", { next: { revalidate: 60 } })
  const data = await response.json()

  return (
    <div className="mx-auto">
      <Clothes></Clothes>
      <div className='container'>
        <ProductView data={data?.data?.allProducts} />
      </div>
      
      <Messages></Messages>
    </div>
  );
};

export default memo(Home);