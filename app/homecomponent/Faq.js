"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FaqData = [
  {
    id: "1",
    question: "What does your food app offer?",
    answer:
      "Our food app provides a platform where users can discover a wide range of restaurants, cuisines, and dishes. You can explore menus, place orders, and even make reservations seamlessly. ",
  },
  {
    id: "2",
    question: "How can I place an order through the app? ",
    answer:
      "Ordering is simple! Just download the app, create an account, browse through the available restaurants, select your desired items from the menu, add them to your cart, and proceed to checkout. ",
  },
  {
    id: "3",
    question: "Can I customize my orders or request special dietary options?",
    answer:
      "Absolutely! Most of our partner restaurants allow for special requests or customizations. Whether you have dietary restrictions or prefer specific ingredients, you can usually add notes or customize your orders before checkout.",
  },
  {
    id: "4",
    question: "How do I pay for my orders? ",
    answer:
      "Our app supports various payment methods, including credit/debit cards, digital wallets, and sometimes cash on delivery, depending on the restaurant's policies. You can securely pay through the app.",
  },
  {
    id: "5",
    question: "How are delivery fees calculated? ",
    answer:
      "Delivery fees vary based on the restaurant, distance, and demand. The app usually calculates this fee at checkout based on these factors.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="mx-auto px-10 py-10" id="faq">
        <h1 className="text-[orange] text-4xl text-center py-10">
          FAQ<span className="text-[orange]">&apos;s</span>
        </h1>
        <div className="">
          {FaqData.map((values, index) => {
            return <FaqCard key={index} {...values} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="brand-container px-2">
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer bg-[orange] justify-between items-center px-5  w-full"
        >
          <p className="font-semibold text-xl xl:text-xl lg:text-xl md:text-lg py-5 my-5">
            {question}
          </p>
          <AiOutlineClose
            size={20}
            className={`${
              open ? "" : "rotate-45"
            } h-5 w-5 transition-transform duration-500`}
          />
        </div>
        <div
          className={`${
            open
              ? "max-h-[1000px] transition-max-h duration-700 ease-in-out overflow-hidden"
              : "max-h-0 transition-max-h duration-700  ease-in-out overflow-hidden"
          }`}
        >
          <p className="transition-transform leading-relaxed duration-500 text-[18px] text-[black] font-medium px-5 py-8 bg-[orange]">
            {answer}
          </p>
        </div>
        <hr className="mt-3 border-[#fff]" />
      </div>
    </>
  );
};
