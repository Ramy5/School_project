import React, { useEffect } from "react";
import CampusLife_1 from "../../assets/CampusLife/CampusLife_1.png";
import CampusLife_2 from "../../assets/CampusLife/CampusLife_2.png";
import CampusLife_3 from "../../assets/CampusLife/CampusLife_3.png";
import CampusLife_4 from "../../assets/CampusLife/CampusLife_4.png";
import CampusLife_5 from "../../assets/CampusLife/CampusLife_5.png";
import { FaChevronRight } from "react-icons/fa6";
import Aos from "aos";

const CampusLife = ({ data }) => {
  console.log("🚀 ~ CampusLife ~ data:", data);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  // const CampusLifeData = data.items.map((item, index) => ({
  //   image:item.value,
  //   head: item.head,
  //   per: item.per,
  // }));

  const CampusLifeData = [
    {
      image: data.items[0].value,
      head: "Clubs & Organizations",
      per: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
    {
      image: data.items[1].value,
      head: "Midpol visit new",
      per: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
    {
      image: data.items[2].value,
      head: "Robotics Stem Dep",
      per: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
    {
      image: data.items[3].value,
      head: "MUN",
      per: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 sm:mx-20 overflow-hidden">
      <div
        className="grid md:grid-cols-2 lg:grid-cols-1 gap-8"
        data-aos="zoom-out-right"
      >
        <div className="">
          <p className="font-medium text-mainColor border-b-2 border-mainColor w-fit pb-1">
            Campus Life
          </p>
          <h2 className="font-semibold text-3xl mt-4">{data.info[0].value}</h2>
          <p className="text-[#5D778C] my-6">{data.info[1].value}</p>
          <button className="bg-mainColor text-white py-3 px-6 rounded-lg font-medium">
            View More
          </button>
        </div>
        <div className="h-full hidden md:block">
          <img
            src={data.items[4].value}
            alt="Students Life"
            className=" h-full w-full"
          />
        </div>
      </div>
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 mt-4 lg:mt-0 items-start overflow-y-hidden overflow-x-hidden"
        data-aos="zoom-out-right"
      >
        {data &&
          data.items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-9 gap-5 mb-5.5"
            >
              <div className="col-span-full md:col-span-5 h-40 lg:h-full ">
                <img
                  src={item.value}
                  alt="CampusLife"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-full md:col-span-4">
                <h2 className="font-bold text-xl whitespace-nowrap">
                  {item.head}
                </h2>
                <p className="text-[#5D778C] font-normal text-[15px] my-3 ">
                  {item.per}
                </p>
                <div className="bg-mainColor w-9 h-9 rounded-full flex justify-center items-center">
                  <FaChevronRight size={16} className="fill-white" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CampusLife;
