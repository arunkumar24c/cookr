"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import "glider-js/glider.min.css";

const data = [
  {
    imgSrc: "/assest/img4.png",
    title: "The Power of a Homemade Meal",
    description:
      "At Cookr, we're rebuilding the food system from scratch, redefining who can participate in the food economy, and returning personal connection to the making, eating, and sharing of food.",
    para: " We are an online marketplace for local, food safety certified cooks to connect with customers in their community and earn a meaningful income selling homemade dishes",
    titles:
      "Homemade is the aroma of your childhood kitchen, the laughter around a family table, the taste of locally sourced produce; its memories, nostalgia, and tradition. Its building bridges between cultures and people that make us whole.",
  },
  {
    imgSrc: "/assest/img4.png",
    title: "The Power of a  Homemade Meal",

    description:
      "At Cookr, we&apos;re rebuilding the food system from scratch, redefining who can participate in the food economy, and returning personal connection to the making, eating, and sharing of food.",
    para: " We are an online marketplace for local, food safety certified cooks to connect with customers in their community and earn a meaningful income selling homemade dishes",
    titles:
      "Homemade is the aroma of your childhood kitchen, the laughter around a family table, the taste of locally sourced produce; its memories, nostalgia, and tradition. Its building bridges between cultures and people that make us whole.",
  },
  {
    imgSrc: "/assest/img4.png",
    title: "The Power of a Homemade Meal",

    description:
      "At Cookr, we&apos;re rebuilding the food system from scratch, redefining who can participate in the food economy, and returning personal connection to the making, eating, and sharing of food.",
    para: " We are an online marketplace for local, food safety certified cooks to connect with customers in their community and earn a meaningful income selling homemade dishes",
    titles:
      "Homemade is the aroma of your childhood kitchen, the laughter around a family table, the taste of locally sourced produce; its memories, nostalgia, and tradition. Its building bridges between cultures and people that make us whole.",
  },
  {
    imgSrc: "/assest/img4.png",
    title: "The Power of a Homemade Meal",

    description:
      "At Cookr, we&apos;re rebuilding the food system from scratch, redefining who can participate in the food economy, and returning personal connection to the making, eating, and sharing of food.",
    para: " We are an online marketplace for local, food safety certified cooks to connect with customers in their community and earn a meaningful income selling homemade dishes",
    titles:
      "Homemade is the aroma of your childhood kitchen, the laughter around a family table, the taste of locally sourced produce; its memories, nostalgia, and tradition. Its building bridges between cultures and people that make us whole.",
  },
  {
    imgSrc: "/assest/img4.png",
    title: "The Power of a ",
    span: "Homemade Meal",
    description:
      "At Cookr, we&apos;re rebuilding the food system from scratch, redefining who can participate in the food economy, and returning personal connection to the making, eating, and sharing of food.",
    para: " We are an online marketplace for local, food safety certified cooks to connect with customers in their community and earn a meaningful income selling homemade dishes",
    titles:
      "Homemade is the aroma of your childhood kitchen, the laughter around a family table, the taste of locally sourced produce; its memories, nostalgia, and tradition. Its building bridges between cultures and people that make us whole.",
  },
];

const Hero = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="py-10 bg-[orange]  ">
      <Glider
        className="glider-container"
        draggable
        hasDots={false}
        slidesToShow={1}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {data.map((item, index) => (
          <div className="bg-[orange] py-5" key={index}>
            <PopularDestinationCard {...item} />
          </div>
        ))}
      </Glider>
      <div className=" ">
        <div className="glider-arrows flex items-center justify-center gap-3">
          <button
            className=" glider-arrow bg-transparent border text-white px-3 py-3 rounded-2xl hover:bg-[red]/70"
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="glider-arrow bg-transparent border text-white px-3 py-3 rounded-2xl hover:bg-[red]/70"
            onClick={handleGliderNext}
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div className="">
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col  bg-[orange] justify-center items-center px-10 py-16 gap-4">
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex justify-center items-center">
          <Image
            src={props.imgSrc}
            width={500}
            height={500}
            className=" bg-transparent"
            alt="#"
          />
        </div>
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex-col flex justify-center">
          <h1 className="text-[45px] font-bold flex gap-2 py-4 text-[white] leading-normal ">
            {props.title}
          </h1>
          <p className="text-justify text-[20px] font-medium py-3 text-[black]/70 leading-normal">
            {props.description}
          </p>
          <p className="text-justify text-[20px] font-medium py-3 text-[black]/70 leading-normal">
            {props.para}
          </p>
          <p className="text-justify text-[20px] font-medium py-3 text-[black]/70 leading-normal">
            {props.titles}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
