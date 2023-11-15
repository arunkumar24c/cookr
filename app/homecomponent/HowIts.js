"use client";

import {
  PiNumberSquareOneFill,
  PiNumberSquareTwoFill,
  PiNumberSquareThreeFill,
  PiNumberSquareFourFill,
} from "react-icons/pi";
import Image from "next/image";
import React, { useState } from "react";
const HowIts = () => {
  const [animatedIndex, setAnimatedIndex] = useState(null);

  const startAnimation = (index) => {
    setAnimatedIndex(index);

    setTimeout(() => {
      setAnimatedIndex(null);
    }, 2000); 
  };

  const items = [
    {
      icon: <PiNumberSquareOneFill size={35} />,
      imageSrc: "/assest/image1.svg",
      title: "Install the app",
      description:
        "visit to playstore app and search Food Delivery app",
    },
    {
      icon: <PiNumberSquareTwoFill size={35} />,
      imageSrc: "/assest/image2.svg",
      title: "Download",
      description:
        "click the install button for Download",
    },
    {
      icon: <PiNumberSquareThreeFill size={35} />,
      imageSrc: "/assest/image3.svg",
      title: "Sign up with free registration",
      description:
        "Open the app and  fill the basic details and order your fav food ",
    },
    {
      icon: <PiNumberSquareFourFill size={35} />,
      imageSrc: "/assest/image1.svg",
      title: "Delivery",
      description:
        "delivery man will delivery to you and enjoy the tasty food ",
    },
  ];

  return (
    <div className="bg-[orange] ">
      <div className="brand-container py-16 px-5">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-[white]">How It Works</h1>
          <h3>Follow the instructions to Install the App</h3>
          <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className={`px-5 py-5 shadow-md border border-white flex flex-col bg-white cursor-pointer rounded-lg gap-4 transition-all duration-500 ${
                  animatedIndex === index ? "transform scale-110" : ""
                }`}
                onMouseEnter={() => startAnimation(index)}
              >
                <p className="flex justify-center items-center ">{item.icon}</p>
                <Image
                  src={item.imageSrc}
                  width={100}
                  height={100}
                  alt="img"
                  className="w-full py-4 pt-5"
                />
                <h1>{item.title}</h1>
                <p className="leading-normal text-[18px] font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIts;
