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
    <div className="sticky top-0 z-50 max-w-screen-4xl mx-auto flex justify-between items-center py-3 px-6 bg-white shadow-lg ">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <div className="text-blue-600 font-bold text-lg">SECU</div>
      </Link>

      <div className="flex space-x-6 md:space-x-4 items-center">
        <Link href="https://web.facebook.com/groups/680461723922372/">
          <div className="text-blue-600 font-bold text-lg md:text-xl">
            <NavbarIcon
              active={false}
              Icon={UserGroupIcon}
              href="https://web.facebook.com/groups/680461723922372/"
            />
          </div>
        </Link>
        <Link href="/">
          <div className="text-blue-600  font-bold text-lg md:text-xl">
            <NavbarIcon Icon={HomeIcon} href="/" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
