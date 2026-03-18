import { useState, useRef } from "react";

export default function Testimonials() {
  return (
    <>
      <div className="my-5 border-solid bg-gray-800 border-4 border-black h-screen my-9 w-5/6 justify-self-center">
        <h1 className="text-center font-semibold text-white text-5xl text-balance">
          The Results Speak For Themselves
        </h1>
        <div className="border-solid border-3 border-white">
          <div className="text-white">card 1</div>
          <div className="text-white">card 2</div>
          <div className="text-white">card 3</div>
        </div>
      </div>
    </>
  );
}
