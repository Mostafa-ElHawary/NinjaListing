/* eslint-disable jsx-a11y/alt-text */
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

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left*/}
      <div className="flex items-center">
        <div className="flex ml-2 items-center rounded-full p-2 text-blue-500 whitespace-nowrap font-semibold ">
          SECU
        </div>
      </div>
      {/* center*/}
      <div className="flex justify-center  flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <Link href="/" className="text-gray-600 text-6xl">
            <NavbarIcon Icon={HomeIcon} href="/" />
          </Link>

          <NavbarIcon Icon={FlagIcon} />

          <Link href="/secu">
            <NavbarIcon active={false} Icon={UserGroupIcon} href="/secu" />
          </Link>
        </div>
      </div>
      {/* Right */}
{
      // <div className=" flex items-center sm:space-x-2 justify-end">
      //   <p className="text-blue-500 whitespace-nowrap font-semibold pr-3">
      //     User Name
      //   </p>
      //   <ViewGridIcon className="icon" />
      //   <ChatIcon className="icon" />
      //   <BellIcon className="icon" />
      //   <ChevronDownIcon className="icon" />
      // </div>
      }
    </div>
  );
};

export default Navbar;
