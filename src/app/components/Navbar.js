/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
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

{
  // <div className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //   <Link href='/teams'>Teams</Link>
  // </div>
}
function Navbar() {
  return (
    <div className="sticky top-0 flex w-full justify-center  border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
      {/* Left */}
      <div className="flex items-center">
        <div className="flex ml-2 items-center rounded-full p-2 text-blue-500 whitespace-nowrap font-semibold text-2xl">
          SECU
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-10 md:space-x-2 items-center">
          <Link
            href="/"
            className="text-gray-600 text-base md:text-lg lg:text-xl"
          >
            <NavbarIcon Icon={HomeIcon} href="/" />
          </Link>
          <Link
            href="/"
            className="text-gray-600 text-base md:text-lg lg:text-xl"
          >
            <NavbarIcon active={false} Icon={UserGroupIcon} href="/" />
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end ">
        <Link
          className="icon"
          href="https://web.facebook.com/messages/t/6637727359687956"
        >
          <ChatIcon className="w-10  mr-2 h-6 text-blue-500 " />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
