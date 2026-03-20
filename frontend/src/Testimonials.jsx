import { useState, useRef } from "react";

export default function Testimonials() {
  return (
    <>
      {/* Tesimonials Container*/}

      <div className="my-5 border-solid bg-gray-800 border-4 border-black h-160 my-9 w-5/6 flex flex-col justify-start gap-30 justify-self-center w-full">
        <h1 className="text-center font-semibold text-white text-5xl text-balance">
          The Results Speak For Themselves
        </h1>

        {/* Cards Container */}

        <div className="border-solid border-3 border-white flex justify-evenly gap-2 ">
          {/* Card 1*/}
          <div className="text-white border-2 border-solid border-green w-1/3 justify-around">
            <h2 className="text-center">Card 1</h2>
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
            <div className="flex justify-around content-center">
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
          <div className="text-white border-2 border-solid border-green w-1/3">
            <h2 className="text-center">Card 2</h2>

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
            <div className="flex justify-around content-center">
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
          <div className="text-white border-2 border-solid border-green w-1/3 h-100 ">
            <h2 className="text-center">Card 3</h2>

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
            <div className="flex justify-around content-center">
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
