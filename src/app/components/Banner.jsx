import React from "react";
import banner from "../../../public/Pet-Banner2.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Find Your Forever Friend</h1>
          <p className="mb-5">
            Every pet deserves a second chance at love and happiness. Discover
            adorable cats and dogs waiting to be adopted, and bring home not
            just a companion, but a lifelong friend who will fill your days with
            joy and unconditional love.
          </p>
          <Link href={"/allbooks"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
