import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";

const Card = () => {
  const data = [
    {
      id: "1",
      title: "10 Lakhs",
      para: "App Install",
      icon: <BiLogoPlayStore size={35} />,
    },
    {
      id: "2",
      title: "2 lakhs",
      para: "Healthy Food Orders Delivered",
      icon: <BsDoorOpen size={35} />,
    },
    {
      id: "3",
      title: "6",
      para: "Location across south India and More to Come",
      icon: <FaMapMarkedAlt size={35} />,
    },
  ];

  return (
    <div>
      <div className="brand-container px-5 py-10">
        <div>
          <h1>Some number that matter</h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-3 py-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="px-5 bg-orange-500 flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-16"
              >
                <p className="flex justify-center items-center ">{item.icon}</p>
                <h1 className="text-white text-3xl font-bold">{item.title}+</h1>
                <p className="text-white text-[18px] leading-normal ">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
