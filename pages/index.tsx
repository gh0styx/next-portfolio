import Image from "next/image";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";


import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" />
      </Head>

        <main className="px-10">
          <section className="min-h-screen">
            <Nav />
            <div className="mt-36 text-center p-10  justify-center">
              <h2 className="text-5xl py-2 font-medium">gh0sty</h2>
              <h3 className="text-2xl py-2">Developer and designer</h3>
              {/* <p className="text-md py-5 leading-8">Student</p> */}
            </div>
            <div className="text-3xl flex justify-center gap-16 py-3 ">
              <a href="https://github.com/1lexaa">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com">
                <AiFillLinkedin />
              </a>
            </div>
          </section>
        </main>

    </>
  );
}
