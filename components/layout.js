// import Footer from "./footer";
import Navbar from "./navbar";


import React, { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <div className="flex items-center justify-center h-[calc(100vh + 72px)] pr-6 pl-6">
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
