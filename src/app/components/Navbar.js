/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import NavbarIcon from "./navbarIcon";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 max-w-screen-xl mx-auto flex justify-between items-center py-3 px-6 bg-white shadow-2xl hover:shadow-lg">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <div className="text-blue-600 font-bold text-lg">SECU</div>
      </Link>

      {/* Right */}

      <div className="flex space-x-6 md:space-x-4 items-center">
        <Link href="https://web.facebook.com/messages/t/6637727359687956">
          <div className="icon text-gray-600 hover:text-twitter-lightblue text-lg md:text-xl">
            <ChatIcon className="w-6 h-6 text-blue-600" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

{
  // <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-6">
  // {/* Left */}
  // <div className="flex items-center">
  //   <div className="text-white font-bold text-lg">SECU</div>
  // </div>
  // {/* Center */}
  // <div className="flex space-x-6 md:space-x-4 items-center">
  //   <Link href="/">
  //     <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
  //       Home
  //     </div>
  //   </Link>
  //   <Link href="https://web.facebook.com/messages/t/6637727359687956">
  //     <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
  //       Messages
  //     </div>
  //   </Link>
  // </div>
  // {/* Right */}
  // <div className="flex items-center space-x-4">
  //   <div className="flex items-center">
  //     <img
  //       src="https://static.vecteezy.com/system/resources/previews/002/387/693/large_2x/user-profile-icon-free-vector.jpg" // Replace with your profile image URL
  //       alt="Profile"
  //       className="w-8 h-8 rounded-full ml-2"
  //     />
  //   </div>
  // </div>
  // </div>
}
