import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function resume() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <Nav />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-64 px-4">
              <img
                src="/logo.jpg"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
          <h1 className="mt-5 text-4xl">Hello</h1>
          <h2 className="mt-5 text-2xl">My name is Alex</h2>
          <p className="mt-5">
            kkfwof ifowfj fjwijf hiwdhi djowqudh fh hwfwihf iwhsdsh fiwh fiwhf
            ihfih ifh ihfi fh ifhifhsfhwhfih fhfhfhf fhfhwdkfhkdfhkwdfhw
            jsdljqdljqdljdl
          </p>
        </div>
      </section>
    </main>
  );
}
