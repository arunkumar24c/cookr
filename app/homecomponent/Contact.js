"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    // Toggle animation class
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000); // Change the duration as needed
    // Add your logic for sending the message here
  };
  return (
    <div className="bg-[orange]">
      <div className="brand-container px-5 py-5">
        <h1 className="text-center  text-[35px]">Contact us</h1>
        <p className="text-center py-2 text-[18px] ">Get in touch</p>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col py-5 gap-4">
          {/* left */}
          <div className="flex flex-col gap-3 w-full xl:w-1/2 md:w-full lg:w-1/2">
            <form className="space-y-8 bg-white px-5 py-5">
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="shadow-sm  border border-b-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let talk"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className={`py-3 px-5 text-sm font-medium text-center  rounded-lg bg-[orange] text-black relative overflow-hidden ${
                    isAnimating ? "animate-pulse" : ""
                  } hover:scale-105 hover:bg-white-500 transition duration-300`}
                  onClick={handleClick}
                >
                  {isAnimating ? (
                    <span className="text-[black] flex items-center justify-center">
                      Sending...
                    </span>
                  ) : (
                    "Send message"
                  )}
                </button>
                <div className="flex gap-3">
                  <p className=" text-[black] cursor-pointer hover:text-[orange] rounded-md border px-2 py-2 border-white shadow-md">
                    <a href=" " target="_blank">
                      <BsInstagram size={25} />
                    </a>
                  </p>
                  <p className=" text-[black] cursor-pointer hover:text-[orange] rounded-md border px-2 py-2 border-white shadow-md">
                    <a href=" " target="_blank">
                      <RiTwitterXLine size={25} />
                    </a>
                  </p>
                  <p className=" text-[black] cursor-pointer hover:text-[orange] rounded-md border px-2 py-2 border-white shadow-md">
                    <a href=" " target="_blank">
                      <BsWhatsapp size={25} />
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
          {/* right */}
          <div className=" w-full xl:w-1/2 md:w-full lg:w-1/2">
            <Image
              width={300}
              height={300}
              className="w-full"
              alt="imgg"
              src={"/assest/image3.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
