// import Footer from "./footer";
import Navbar from "./navbar";


import React, { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = ({ children }) => {
  return (
    <>
    <Navbar /> {/* Render the Navbar component */}
    <div className="flex items-center justify-center  bg-gray-100 pr-6 pl-6 h-[calc(100vh - 72px)]"> {/* Changed h-[calc(100vh + 72px)] to min-h-screen and added a background color */}
      {children}
    </div>
  </>
  );
};

export default Layout;

// className="flex items-center justify-center h-[calc(100vh + 72px)] pr-6 pl-6"