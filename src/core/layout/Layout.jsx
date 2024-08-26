import React from "react";
import FooterView from "../../components/footer/view/FooterView";
import NavDesktop from "../../components/navbar/components/NavDesktop";
import { useGlobal } from "../../hooks/useGlobal";

const Layout = ({ children }) => {
  const { desktopView } = useGlobal();

  return (
    <div className="flex bg-PauBackground">
      {/* NavbarView is fixed to the left side of the viewport */}
      {desktopView && (
      <div className="fixed top-5 left-5 h-full w-32 z-10 ">
      <NavDesktop />
    </div>
      )}


      {/* Main content area (children and FooterView) */}
      <div className="flex-1 flex flex-col">
        <div className="flex-grow">{children}</div>
        <FooterView />
      </div>
    </div>
  );
};

export default Layout;

// <div className="flex">
//     {/* NavbarView is fixed to the left */}
//     <div className="fixed top-0 left-0 h-full w-32">
//         <NavbarView />
//     </div>

//     {/* Main content area (children and FooterView) */}
//     <div className="ml-32 flex flex-col w-full">
//         <div className="flex-grow">
//             {children}
//         </div>
//         <FooterView />
//     </div>
// </div>
