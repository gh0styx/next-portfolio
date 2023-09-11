import React from "react";

const AboutMe = () => {
  return (
    <div className=" sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img
            src="/myphoto.jpeg"
            alt="logo"
            className="rounded-2xl  h-80 ml-96 object-contain"
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About me
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            My name is <span className="text-indigo-600">Oleksii</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
