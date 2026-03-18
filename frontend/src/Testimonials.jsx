import { useState, useRef } from "react";

export default function Testimonials() {
  return (
    <>
      {/* Tesimonials Container*/}

      <div className="my-5 border-solid bg-gray-800 border-4 border-black h-160 my-9 w-5/6 flex flex-col justify-around justify-self-center">
        <h1 className="text-center font-semibold text-white text-5xl text-balance">
          The Results Speak For Themselves
        </h1>

        {/* Cards Container */}

        <div className="border-solid border-3 border-white flex justify-evenly ">
          <div className="text-white">
            <h2>Card 1</h2>
          </div>
          <div className="text-white">
            <h2>Card 2</h2>
          </div>
          <div className="text-white">
            <h2>Card 3</h2>
          </div>
        </div>
      </div>
    </>
  );
}
