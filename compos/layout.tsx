import Footer from "./footer";
import Navbar from "./navbar";

// const Layout = ({children}) => {
//     return ( <>
//     <Navbar/>
//     {children}
//     <Footer/>

//     </> );
// }

// export default Layout;

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
        <Footer />
      </div>
    </>
  );
};

export default Layout;
