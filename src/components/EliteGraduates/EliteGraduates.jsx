import React, { useEffect } from "react";
import EliteGraduates_1 from "../../assets/EliteGraduates/EliteGraduates_1.png";
import EliteGraduates_2 from "../../assets/EliteGraduates/EliteGraduates_2.png";
import EliteGraduates_3 from "../../assets/EliteGraduates/EliteGraduates_3.png";
import EliteGraduates_4 from "../../assets/EliteGraduates/EliteGraduates_4.png";
import EliteGraduates_5 from "../../assets/EliteGraduates/EliteGraduates_5.png";
import EliteGraduates_6 from "../../assets/EliteGraduates/EliteGraduates_6.png";
import EliteGraduates_7 from "../../assets/EliteGraduates/EliteGraduates_7.png";
import EliteGraduates_8 from "../../assets/EliteGraduates/EliteGraduates_8.svg";
import EliteGraduates_9 from "../../assets/EliteGraduates/EliteGraduates_9.png";
import EliteGraduates_10 from "../../assets/EliteGraduates/EliteGraduates_10.png";
import { useLocation } from "react-router-dom";
import Aos from "aos";

const EliteGraduates = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <div className="bg-white p-4 md:p-8 container_section overflow-x-hidden">
      <div>
        <div className="md:hidden block text-center mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-mainColor my-5 ">
            Elite Graduates
          </h1>
          <p className="mt-2 md:text-base lg:text-lg">
            But I Must Explain To You How All This Mistaken Idea Of Denouncing
            Pleasure <br /> And Praising Pain Was Born And I Will Give You A
            Cete Account Of The System
          </p>
        </div>
        <div className="text-center mb-4 gap-3 md:hidden flex">
          <div className="w-full" data-aos="zoom-in-left">
            <img
              src={EliteGraduates_1}
              alt="Graduate"
              className="rounded-md h-full w-full"
            />
          </div>
          <div className="w-full" data-aos="zoom-in-right">
            <img
              src={EliteGraduates_2}
              alt="Graduate"
              className="rounded-md h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="text-center mb-4 gap-3 md:flex justify-between hidden">
        <div data-aos="zoom-in-right">
          <img
            src={EliteGraduates_1}
            alt="Graduate"
            className="rounded-md h-full w-full"
          />
        </div>
        <div className="md:block hidden" data-aos="zoom-in-down">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-mainColor my-5 ">
            Elite Graduates
          </h1>
          <p className="mt-2 md:text-base lg:text-lg">
            But I Must Explain To You How All This Mistaken Idea Of Denouncing
            Pleasure <br /> And Praising Pain Was Born And I Will Give You A
            Cete Account Of The System
          </p>
        </div>
        <div data-aos="zoom-in-left">
          <img
            src={EliteGraduates_2}
            alt="Graduate"
            className="rounded-md h-full w-full"
          />
        </div>
      </div>

      <div
        className="flex items-center md:flex-row flex-col gap-3"
        data-aos="fade-right"
      >
        <div className="flex gap-3">
          <div>
            <img
              src={EliteGraduates_3}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
          <div>
            <img
              src={EliteGraduates_4}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img
              src={EliteGraduates_5}
              alt="Graduate"
              className="rounded-md h-full "
            />
          </div>
          <div>
            <img
              src={EliteGraduates_6}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
        </div>
      </div>

      <div
        className="flex items-center md:flex-row flex-col gap-3 mt-4"
        data-aos="fade-left"
      >
        <div className="flex gap-3">
          <div>
            <img
              src={EliteGraduates_7}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
          <div>
            <img
              src={EliteGraduates_8}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img
              src={EliteGraduates_9}
              alt="Graduate"
              className="rounded-md h-full "
            />
          </div>
          <div>
            <img
              src={EliteGraduates_10}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteGraduates;
