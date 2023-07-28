import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
import projects from "./projects";
import resume from "./resume";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" />
      </Head>

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

          <div className="text-center p-10 items-center">
            <h2 className="text-5xl py-2 font-medium">gh0sty</h2>
            <h3 className="text-2xl py-2">Developer and designer</h3>
            {/* <p className="text-md py-5 leading-8">Student</p> */}
          </div>
          <div className="text-3xl flex justify-center gap-16 py-3 ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className=""></div>
        </section>
      </main>
    </>
  );
}
