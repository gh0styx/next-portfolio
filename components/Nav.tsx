import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-10 mb-1 flex justify-between">
      <Link href="/">
        <div className="text-xl font-mono">developed by...</div>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/projects">
            <div className="px-4 py-2 border-none rounded-md ml-8">
              Projects
            </div>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <div className="px-4 py-2 border-none rounded-md ml-8">About</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
