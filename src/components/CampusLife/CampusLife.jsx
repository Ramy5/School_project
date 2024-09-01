import React from "react";
import CampusLife_1 from "../../assets/CampusLife/CampusLife_1.svg";
import CampusLife_2 from "../../assets/CampusLife/CampusLife_2.svg";
import CampusLife_3 from "../../assets/CampusLife/CampusLife_3.svg";
import CampusLife_4 from "../../assets/CampusLife/CampusLife_4.svg";
import CampusLife_5 from "../../assets/CampusLife/CampusLife_5.svg";
import { FaChevronRight } from "react-icons/fa6";

const CampusLife = () => {
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
    <div className="grid grid-cols-12 gap-5 mx:0 sm:mx-20">
      <div className="col-span-6">
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
        <div className="w-full h-full">
          <img src={CampusLife_1} alt="Students Life" />
        </div>
      </div>
      <div className="col-span-6">
        {CampusLifeData &&
          CampusLifeData.map((item) => (
            <div className="flex gap-x-6 gap-y-12 mb-5.5">
              <img
                src={item.image}
                alt="CampusLife"
                className="w-1/2 h-fit"
              />
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-[#5D778C] my-3">{item.desc}</p>
                <div className="bg-mainColor w-11 h-11 rounded-full flex justify-center items-center">
                  <FaChevronRight size={22} className="fill-white" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CampusLife;
