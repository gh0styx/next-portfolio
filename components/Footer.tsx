import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-white rounded-lg shadow m-4 dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://github.com/1lexaa" className="hover:underline">
            gh0sty™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/projects">
              <div className="mr-4 hover:underline md:mr-6 ">Projects</div>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <div className="hover:underline">About</div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
