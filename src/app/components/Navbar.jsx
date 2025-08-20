import React from "react";
import LoginBTN from "./LoginBTN";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center max-w-7xl mx-auto py-6">
      <ul className="flex justify-center items-center gap-10">
        <li>Home</li>
        <li>Pets</li>
        <li>Add Pets</li>
      </ul>
      <LoginBTN></LoginBTN>
    </nav>
  );
};

export default Navbar;
