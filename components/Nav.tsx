import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-10  flex justify-between">
      <Link href="/" replace>
        <div className="text-xl font-mono animate-pulse">developed by...</div>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/projects" replace>
            <div className="px-4 py-2 border-none rounded-md ml-8 ">
              Projects
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="px-4 py-2 border-none rounded-md ml-8">About</div>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <div className="px-4 py-2 border-none rounded-md ml-8">
              Contacts
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
