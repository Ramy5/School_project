import React, { useEffect, useState, useRef, Fragment } from "react";
import schoolType_1 from "../../assets/schoolType/schoolType_1.png";
import schoolType_2 from "../../assets/schoolType/schoolType_2.png";
import schoolType_3 from "../../assets/schoolType/schoolType_3.png";
import "aos/dist/aos.css";
import { useParallax } from "react-scroll-parallax";
import { LuMoveRight } from "react-icons/lu";

const SchoolType = () => {
  const schoolType = [
    {
      index: 1,
      image: schoolType_1,
      title: "Elite dream school in Istanbul",
    },
    {
      index: 2,
      image: schoolType_2,
      title: "Elite online school ",
    },
    {
      index: 2,
      image: schoolType_3,
      title: "Elite Canadian diploma",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-full container_section my-16">
      {schoolType &&
        schoolType.map((item, index) => {
          return (
            <div
              key={index}
              className={`camp-${index} relative h-[300px] md:h-[640px] cursor-pointer !duration-500 !transition-all w-full md:w-1/3 hover:md:w-2/5`}
            >
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="h-full w-full bg-cover bg-center object-cover"
              />
              <div className="absolute top-1/2 md:top-3/4 left-1/4 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 w-full text-center text-white">
                <h2 className="text-xl font-semibold lg:text-3xl">{item.title}</h2>
                <p className="text-2xl my-3"> {item.desc} </p>
                <button className="flex items-end gap-2 mt-4 m-auto group">
                  <span className="text-white font-normal text-base lg:text-lg">
                    Read More{" "}
                  </span>{" "}
                  <LuMoveRight size={20} className="text-white mb-[1px] transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SchoolType;
