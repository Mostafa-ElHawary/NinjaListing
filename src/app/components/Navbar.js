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
    <div className="bg-twitter-blue">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-6">
      {/* Left */}
      <div className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white mr-2"
        >
          <path d="M21.935 4.935a7.51 7.51 0 0 1-2.18.597 3.765 3.765 0 0 0 1.656-2.082 7.53 7.53 0 0 1-2.384.914 3.766 3.766 0 0 0-6.42 3.43A10.67 10.67 0 0 1 2.56 3.814a3.766 3.766 0 0 0 1.164 5.027 3.756 3.756 0 0 1-1.7-.469v.047a3.765 3.765 0 0 0 3.02 3.695 3.758 3.758 0 0 1-1.697.064 3.767 3.767 0 0 0 3.516 2.613 7.55 7.55 0 0 1-4.667 1.61A7.54 7.54 0 0 1 1 18.83a10.644 10.644 0 0 0 5.78 1.685c6.948 0 10.74-5.753 10.74-10.739 0-.165-.003-.33-.01-.495a7.67 7.67 0 0 0 1.885-1.945l-.002-.001z"></path>
        </svg>
        <div className="text-white font-bold text-lg">SECU</div>
      </div>

      {/* Center */}
      <div className="flex space-x-6 md:space-x-4 items-center">
        <Link href="/">
          <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
            Home
          </div>
        </Link>
        <Link href="/">
          <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
            Explore
          </div>
        </Link>
        <Link href="/">
          <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
            Notifications
          </div>
        </Link>
        <Link href="/">
          <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
            Messages
          </div>
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
            Profile
          </div>
        </Link>
        <Link href="/">
          <div className="text-white hover:text-twitter-lightblue text-lg md:text-xl">
            More
          </div>
        </Link>
        <div className="flex items-center">
          <div className="rounded-full bg-white text-twitter-blue font-semibold text-base md:text-lg py-1 px-3">
            User Name 
          </div>
          <img
            src="profile-image.jpg" // Replace with your profile image URL
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
