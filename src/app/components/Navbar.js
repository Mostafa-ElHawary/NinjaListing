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
    <div className="">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Left */}
        <div className="flex items-center">
          <div className="text-white font-bold text-lg">SECU</div>
        </div>

        {/* Center */}
        <div className="flex space-x-6 md:space-x-4 items-center">
          <Link href="/">
            <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
              Home
            </div>
          </Link>
          <Link href="https://web.facebook.com/messages/t/6637727359687956">
            <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
              Messages
            </div>
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/387/693/large_2x/user-profile-icon-free-vector.jpg" // Replace with your profile image URL
              alt="Profile"
              className="w-8 h-8 rounded-full ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown">

// <!-- Dropdown menu -->
// <div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//     <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
//       <div>Bonnie Green</div>
//       <div class="font-medium truncate">name@flowbite.com</div>
//     </div>
//     <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//       </li>
//     </ul>
//     <div class="py-1">
//       <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//     </div>
// </div>
