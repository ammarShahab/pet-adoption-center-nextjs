import React from "react";
import LoginBTN from "./LoginBTN";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center max-w-7xl mx-auto py-6 bg-amber-300">
      <ul className="flex justify-center items-center gap-10">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/allpets">
          <li>Pets</li>
        </Link>
        <Link href="/addpets">
          <li>Add Pets</li>
        </Link>
      </ul>
      <Link href="/login">
        <LoginBTN></LoginBTN>
      </Link>
    </nav>
  );
};

export default Navbar;
