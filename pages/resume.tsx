import React from "react";
import Link from "next/link";

export default function resume() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <Link href="/">
            <div className="text-xl font-mono">developed by...</div>
          </Link>
          <ul className="flex items-center">
            <li>
              {/* <BsFillMoonStarsFill className="cursor-pointer text-2xl" /> */}
              <Link href="/projects">
                <div className="px-4 py-2 border-none rounded-md ml-8">
                  Projects
                </div>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <div className="px-4 py-2 border-none rounded-md ml-8">
                  Resume
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div>Resume</div>
      </section>
    </main>
  );
}
