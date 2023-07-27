// import Footer from "./footer";
import Navbar from "./navbar";


import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="content">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
