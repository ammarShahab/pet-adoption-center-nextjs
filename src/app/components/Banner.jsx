import React from "react";
import banner from "../../../public/book-banner-1.jpg";
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
          <h1 className="mb-5 text-5xl font-bold">
            Buy Books Anytime, Anywhere
          </h1>
          <p className="mb-5">
            Choose a book, buy it instantly, and dive straight into a world of
            stories. Enjoy the simplicity of picking your favorite titles and
            having them ready for you in no time, making your reading experience
            seamless, fast, and enjoyable from start to finish.
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
