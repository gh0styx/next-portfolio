import React from "react";
import Link from "next/link";

const projects = () => {
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

        
        <div className="text-center p-10 items-center ">
          <h1>My Projects</h1>
        </div>

        <div className="border rounded-lg w-80 h-80">
          <img src="/tt.png" alt="1st project" className="p-3 w-full" />
          <div className="p-4">
            <h2 className="text-lg font-medium">Project Name</h2>
            <div className="flex items-center">
              <button className=" m-2 text-center">Live Server</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default projects;
