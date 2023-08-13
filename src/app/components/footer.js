import Link from "next/link";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 py-5 ">
      <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
{
        // <Link href="https://web.facebook.com/messages/t/6637727359687956">
        //   <div className="flex items-center  text-blue-600 hover:text-blue-500 ">
            
        //        <ChatIcon className="w-6 h-6 ml-2  " />
            
           
        //   </div>
        // </Link>

        }
        <Link className="icon" href="https://web.facebook.com/messages/t/6637727359687956">
        
          <ChatIcon className="w-6 h-6 text-blue-500 ml-2 " />
        
      </Link>
      </div>
    </footer>
  );
};

export default Footer;
