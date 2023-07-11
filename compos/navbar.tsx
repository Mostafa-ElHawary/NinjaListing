import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
          <div className="logo">
            <h1>Ninja List</h1>
          </div>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/ninja">Ninja Listing</Link>
        </nav>
    );
};

export default Navbar;
