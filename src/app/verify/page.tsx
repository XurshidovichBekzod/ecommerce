import VerifySection from "@/components/verifySection/VerifySection";
import { memo } from "react";

const Varify = async ({ searchParams }: { searchParams: { q: string } }) => {
  const { q } = searchParams;
  const user = atob(q); // base64 decode q
  return <VerifySection user={user} />;
};

export default memo(Varify);
