import VerifySection from "@/components/verifySection/VerifySection";
import { memo } from "react";

const Varify = ({ searchParams }: { searchParams: { q?: string } }) => {
  const q = searchParams.q;
  const user = q ? atob(q) : "";

  return <VerifySection user={user} />;
};

export default memo(Varify);
