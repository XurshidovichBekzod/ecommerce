import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { memo, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="Layout">
      <Header />
      <div className="bg-[#e3f1ff]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default memo(Layout);
