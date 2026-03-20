import { useState, useRef } from "react";

export default function Testimonials() {
  return (
    <>
      {/* Tesimonials Container*/}

      <div className="mt-25    w-5/6 flex flex-col justify-start gap-10 justify-self-center ">
        <h1 className="text-center font-semibold text-blue-600 text-5xl text-balance">
          The Results Speak For Themselves
        </h1>

        {/* Cards Container */}

        <div className=" flex mb-10 gap-6 flex-wrap justify-center">
          {/* Card 1*/}
          <div className="shadow-xl/50 text-white p-4 bg-gray-800 border-3 border-solid border-gray-800 rounded-xl flex flex-col justify-between w-80 shrink-0">
            {" "}
            {/* 5 stars image*/}
            <img
              src="./src/assets/images/5-stars.svg"
              alt="5 stars"
              className="w-30"
            />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusantium eos repudiandae aliquam! Dicta, architecto?
              Neque placeat reprehenderit in dolore rerum expedita illum
              aspernatur! Autem modi nisi labore aliquam praesentium?
            </p>
            <div className="flex justify-end content-center">
              <img
                src="./src/assets/images/profile-pics/male-profile.jpg"
                alt="profile pic of user"
                className="rounded-full h-20 w-20 object-cover"
              />
              <p className="text-right self-center italic font-mono">
                - Brandon parkerson
              </p>
            </div>
          </div>

          {/* Card 2*/}
          <div className="shadow-xl/50 text-white p-4 bg-gray-800 border-3 border-solid border-gray-800 rounded-xl flex flex-col justify-between w-80 shrink-0">
            {/* 5 stars image*/}
            <img
              src="./src/assets/images/5-stars.svg"
              alt="5 stars"
              className="w-30"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusantium eos repudiandae aliquam! Dicta, architecto?
              Neque placeat reprehenderit in dolore rerum expedita illum
              aspernatur! Autem modi nisi labore aliquam praesentium?
            </p>
            <div className="flex justify-end content-center">
              <img
                src="./src/assets/images/profile-pics/male-profile.jpg"
                alt="profile pic of user"
                className="rounded-full h-20 w-20 object-cover"
              />
              <p className="text-right self-center italic font-mono">
                - Brandon parkerson
              </p>
            </div>
          </div>

          {/* Card 3*/}
          <div className="shadow-xl/50 text-white p-4 bg-gray-800 border-3 border-solid border-gray-800 rounded-xl flex flex-col justify-between w-80 shrink-0">
            {/* 5 stars image*/}
            <img
              src="./src/assets/images/5-stars.svg"
              alt="5 stars"
              className="w-30"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusantium eos repudiandae aliquam! Dicta, architecto?
              Neque placeat reprehenderit in dolore rerum expedita illum
              aspernatur! Autem modi nisi labore aliquam praesentium?
            </p>
            <div className="flex justify-end content-center">
              <img
                src="./src/assets/images/profile-pics/male-profile.jpg"
                alt="profile pic of user"
                className="rounded-full h-20 w-20 object-cover"
              />
              <p className="text-right self-center italic font-mono">
                - Brandon parkerson
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
