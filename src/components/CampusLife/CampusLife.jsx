import React, { useEffect } from "react";
import CampusLife_1 from "../../assets/CampusLife/CampusLife_1.png";
import CampusLife_2 from "../../assets/CampusLife/CampusLife_2.png";
import CampusLife_3 from "../../assets/CampusLife/CampusLife_3.png";
import CampusLife_4 from "../../assets/CampusLife/CampusLife_4.png";
import CampusLife_5 from "../../assets/CampusLife/CampusLife_5.png";
import { FaChevronRight } from "react-icons/fa6";
import Aos from "aos";

const CampusLife = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const CampusLifeData = [
    {
      image: CampusLife_2,
      title: "Clubs & Organizations",
      desc: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
    {
      image: CampusLife_3,
      title: "Midpol visit new",
      desc: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
    {
      image: CampusLife_4,
      title: "Robotics Stem Dep",
      desc: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
    {
      image: CampusLife_5,
      title: "MUN",
      desc: "Seem facilisis purus morbi elit enim sagits eleifend volutpat hac ridiculus placerat elementum. ",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 sm:mx-20 overflow-x-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8" data-aos="zoom-out-right">
        <div className="">
          <p className="font-medium text-mainColor border-b-2 border-mainColor w-fit pb-1">
            Campus Life
          </p>
          <h2 className="font-semibold text-3xl mt-4">Students Life</h2>
          <p className="text-[#5D778C] my-6">
            Sem facilisis purus morbi elit enim sagittis, eleifend. Volutpat hac
            ridiculus placerat elementum arcu dui ut enim. Id ac eros libero
            suscipit nibh quam tortor. Vel orci, donec feugiat nullam euismod
            sapien magna et vitae. Sem facilisis purus morbi elit enim sagittis,
            eleifend. Volutpat hac ridiculus placerat elementum arcu dui
          </p>
          <button className="bg-mainColor text-white py-3 px-6 rounded-lg font-medium">
            View More
          </button>
        </div>
        <div className="h-full hidden md:block">
          <img
            src={CampusLife_1}
            alt="Students Life"
            className=" h-full w-full"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 mt-4 lg:mt-0" data-aos="zoom-out-left">
        {CampusLifeData &&
          CampusLifeData.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-9 gap-5 mb-5.5">
              <div className="col-span-full md:col-span-5">
                <img
                  src={item.image}
                  alt="CampusLife"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-full md:col-span-4">
                <h2 className="font-bold text-xl whitespace-nowrap">{item.title}</h2>
                <p className="text-[#5D778C] font-normal text-[15px] my-3 ">{item.desc}</p>
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
