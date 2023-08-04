import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

const WelcomePage = () => {
  return (
    <>
      <div className="mt-36 text-center p-10  justify-center">
        <h2 className="text-5xl py-2 font-medium text-indigo-600">gh0sty</h2>
        <h3 className="text-2xl py-2">Developer and designer</h3>
      </div>
      <div className="text-3xl flex justify-center gap-16 py-3 ">
        <a href="https://github.com/1lexaa" className="animate-bounce">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com" className="animate-bounce">
          <AiFillLinkedin />
        </a>
      </div>
    </>
  );
};

export default WelcomePage;
