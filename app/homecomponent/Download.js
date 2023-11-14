import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div className="">
      <div className="brand-container py-16 px-5">
        <h1 className="py-10 text-center text-[35px] ">services</h1>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-center gap-5">
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-5">
            <h1>Download for a taste of homemade food.</h1>
            <p className="text-[18px] font-medium text-justify leading-normal">
              Are you craving for some homemade food but don't have the time or
              energy to prepare it yourself? Download our mobile app for a
              convenient and delicious solution. With just a few taps on your
              smartphone, you can enjoy the taste of homemade meals without
              having to leave your home.{" "}
            </p>
            <p className="text-[18px] font-medium text-justify leading-normal">
              Not only is our app a convenient way to order food, but it also
              supports local home chefs in your community. By using our app,
              you're helping these chefs share their passion for cooking and
              provide delicious, homemade meals to customers like you.{" "}
            </p>
            <p className="text-[18px] font-medium text-justify leading-normal">
              Plus, our app is easy to use and offers a secure payment process,
              so you can order with confidence. You can also track your delivery
              in real-time and even leave feedback to help us improve our
              services.{" "}
            </p>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-5">
              <Image
                src={"/assest/play.png"}
                width={200}
                height={50}
                className=""
              />
              <Image
                src={"/assest/play1.png"}
                width={200}
                height={50}
                className=""
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <Image
              src={"/assest/img7.jpg"}
              width={400}
              height={200}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
