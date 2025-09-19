import VerifySection from '@/components/verifySection/VerifySection';
import { memo } from 'react';

const Varify = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;
  
  // q ni decode qilib JSON parse qilamiz
  const decoded = atob(q);
  const user = JSON.parse(decoded); // ✅ endi { email, password }

  return <VerifySection user={user} />;
};

export default memo(Varify);
