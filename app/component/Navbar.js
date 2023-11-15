"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "" },
    { name: "Service", link: "" },
    { name: "About Us", link: "" },
    
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="brand-container  px-5">
      <div className="shadow-md w-full fixed z-10 top-0 left-0">
        <div className="md:flex items-center justify-between bg-[#fec72f] py-8 md:px-10 px-7">
          <div className="flex gap-2 cursor-pointer">
            <Link href="/">
              <Image
                src={"/assest/logo.svg"}
                width={150}
                height={50}
                alt="img"
                className=""
              />
            </Link>
          </div>
          <div
            onClick={toggleMenu}
            className={`absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 transform transition-transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <CiMenuFries className="text-white" size={25} />
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static font-work-sans bg-[#fec72f] gap-[2rem] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in px-5 ${
              isOpen ? "top-15" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 text-white relative font-work-sans text-[18px] font-bold hover:text-[20px] cursor-pointer"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
