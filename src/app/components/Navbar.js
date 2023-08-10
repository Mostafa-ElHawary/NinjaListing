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
    <div className="bg-gradient-to-r from-blue-900 to-blue-800">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-6">
      {/* Left */}
      <div className="flex items-center">
        <div className="rounded-full  text-white font-semibold text-2xl py-2 px-4">
          SECU
        </div>
      </div>

      {/* Center */}
      <div className="flex space-x-10 md:space-x-2 items-center">
        <Link href="/">
          <div className="text-gray-300 hover:text-white text-base md:text-lg lg:text-xl">
            <HomeIcon className="w-6 h-6" />
          </div>
        </Link>
        <Link href="/">
          <div className="text-gray-300 hover:text-white text-base md:text-lg lg:text-xl">
            <UserGroupIcon className="w-6 h-6" />
          </div>
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Link href="https://web.facebook.com/messages/t/6637727359687956">
          <div className="icon">
            <ChatIcon className="w-6 h-6 text-white " />
          </div>
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
