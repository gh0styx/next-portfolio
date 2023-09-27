import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = () => {
  return (
    <>
      <main className="px-10 bg-white dark:bg-black ">
        <section className="">
          <Nav />
          <div className="text-center p-10 items-center text-3xl ">
            <h1 className="font-mono animate-bounce">My Projects</h1>
          </div>

          <div className="flex justify-center flex-wrap">
            <ProjectCard
              img="/tech-shop.png"
              title="Shop"
              text="Next.js Tech-Shop. MongoDB. Store"
              url="https://github.com/1lexaa/next-tech-shop"
            />
            <ProjectCard
              img="/quiz.png"
              title="Quiz"
              text="React.js Quiz App. MongoDB. Quiz"
              url="https://github.com/1lexaa/Quiz"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default projects;
