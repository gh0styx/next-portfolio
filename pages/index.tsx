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
import ProjectCard from "@/components/ProjectCard";
import WelcomePage from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <main className="px-10">
        <Nav />

        <WelcomePage />
      </main>
    </>
  );
}
