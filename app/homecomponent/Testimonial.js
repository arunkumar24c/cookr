"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsStarFill, BsStar } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";
import "glider-js/glider.min.css";

const testimonialData = [
  {
    id: 1,
    name: "",
    img: "",
  },
  {
    id: 2,
    name: "",
    img: "",
  },
  {
    id: 3,
    name: "",
    img: "",
  },
  {
    id: 4,
    name: "",
    img: "",
  },
  {
    id: 5,
    name: "",
    img: "",
  },
  {
    id: 6,
    name: "",
    img: "",
  },
];

const Testimonial = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="relative container mx-auto py-16 mt-10">
      <h1 className="py-10 text-center text-[orange]">Coming Soon</h1>
      <Glider
        className="glider-container"
        draggable
        hasDots={true}
        slidesToShow={4}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "4",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "2",
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
        {testimonialData.map((testimonial) => (
          <div className="mx-2 " key={testimonial.id}>
            <PopularDestinationCard {...testimonial} />
          </div>
        ))}
      </Glider>
      <div className="glider-arrows flex items-center justify-center item-center gap-3 relative">
        <button
          className="glider-arrow absolute bottom-[20rem] right-[5rem]"
          onClick={handleGliderPrev}
        >
          <GoArrowLeft size={32} />
        </button>
        <button
          className="glider-arrow absolute bottom-[20rem] right-[2rem]"
          onClick={handleGliderNext}
        >
          <GoArrowRight size={32} />
        </button>
      </div>
    </div>
  );
};

const PopularDestinationCard = () => {
  return (
    <div className="brand-container py-5 mt-5 px-5 hover:shadow-lg shadow-md border ">
      <div className="">
        <Image
          src="/assest/logo2.svg"
          width={160}
          height={160}
          className="rounded-full "
        />
      </div>
    </div>
  );
};

export default Testimonial;
