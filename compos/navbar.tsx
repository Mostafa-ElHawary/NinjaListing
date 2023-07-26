import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav>
          <div className="logo" >
          <Link href="/">SECU-Community</Link>
          </div>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/ninja">Team Ptojects</Link>
        </nav>
    );
};

export default Navbar;
