import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import AboutMe from "@/components/AboutMe";

const about = () => {
  return (
    <main className="px-10">
      <Nav />

      <AboutMe />
    </main>
  );
};

export default about;
