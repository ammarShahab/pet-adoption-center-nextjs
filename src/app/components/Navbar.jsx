"use-client";

import React from "react";
import LoginBTN from "./LoginBTN";
import Link from "next/link";
import logo from "../../../public/pet-logo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Navbar = () => {
  // const session = useSession();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/allpets">Pets</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <a>
            <Image src={logo} width={90} height={90} alt="logo"></Image>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/login">
            <LoginBTN></LoginBTN>
          </Link>
        </div>
      </div>
    </div>
    /*  <nav className="flex justify-around items-center max-w-7xl mx-auto py-6 bg-amber-300">
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
    </nav> */
  );
};

export default Navbar;
