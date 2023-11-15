import Image from 'next/image';
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-[orange]">
      <div className="brand-container px-10 py-16">
        <h1 className='text-center py-5'>About Us </h1>
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full py-10">
            <div className="flex flex-col gap-6 xl:flex-row md:flex-col lg:flex-row justify-center ">
              <Image
                src={"/assest/img5.png"}
                width={200}
                height={500}
                className=""
                alt="img"
              />
              <div className="flex flex-col  justify-center px-16 gap-3">
                <h1 className="font-bold text-[25px]">
                  {" "}
                  <span>85%</span>of Cookr are
                  <span className="bg-[white] px-2 text-black">women</span>
                </h1>
                <h1 className="font-bold text-[25px]">
                  <span>80%</span>of Cookr are{" "}
                  <span className="bg-[white] px-2 text-black">
                    people of color
                  </span>
                </h1>
                <h1 className="font-bold text-[25px]">
                  <span>Over 85</span>{" "}
                  <span className="bg-[white] px-2 text-black">countries</span>{" "}
                  represented
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full">
            <div className="flex flex-col gap-4 justify-center">
              <h1>Our Community</h1>
              <div className="bg-[orange] w-7"></div>
              <h3>
                Cookr are aunties and abuelas, immigrants and refugees,
                stay-at-home parents and restaurant dreamers.
              </h3>
              <p className='text-justify leading-normal font-medium text-[18px]'>
                Together, they represent countries around the world, from
                Algeria to Korea, to India and Venezuela. And the best part?
                Cookr are your neighbors, passionate local cooks in your
                community who are doing what they love most — sharing their food
                and culture with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner