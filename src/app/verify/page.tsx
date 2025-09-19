import VerifySection from '@/components/verifySection/VerifySection';
import { memo } from 'react';

const Varify = async({searchParams}: {searchParams: Promise<{q: string}>}) => {
    const {q} = await searchParams
    const user = atob(q)
    // fetch("http://localhost:3000/api/auth/login")
  return (
    <VerifySection user={user}/>
  );
};

export default memo(Varify);