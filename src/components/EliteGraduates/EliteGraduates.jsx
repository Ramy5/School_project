import React, { useEffect } from "react";
import Aos from "aos";

const EliteGraduates = ({ data }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const eliteGraduates_0 = data.items?.[0]?.value;
  const eliteGraduates_1 = data.items?.[1]?.value;
  const eliteGraduates_2 = data.items?.[2]?.value;
  const eliteGraduates_3 = data.items?.[3]?.value;
  const eliteGraduates_4 = data.items?.[4]?.value;
  const eliteGraduates_5 = data.items?.[5]?.value;
  const eliteGraduates_6 = data.items?.[6]?.value;
  const eliteGraduates_7 = data.items?.[7]?.value;
  const eliteGraduates_8 = data.items?.[8]?.value;
  const eliteGraduates_9 = data.items?.[9]?.value;

  return (
    <div className="bg-white p-4 md:p-8 container_section overflow-x-hidden">
      <div>
        <div className="md:hidden block text-center mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-mainColor my-5 ">
            {data.info[0].value}
          </h1>
          <p className="mt-2 md:text-base lg:text-lg">{data.info[1].value}</p>
        </div>
        <div className="text-center mb-4 gap-3 md:hidden flex">
          <div className="w-full" data-aos="zoom-in-left">
            <img
              src={eliteGraduates_0}
              alt="Graduate"
              className="rounded-md h-full w-full"
            />
          </div>
          <div className="w-full" data-aos="zoom-in-right">
            <img
              src={eliteGraduates_1}
              alt="Graduate"
              className="rounded-md h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="text-center mb-4 gap-3 md:flex justify-between hidden">
        <div data-aos="zoom-in-right">
          <img
            src={eliteGraduates_0}
            alt="Graduate"
            className="rounded-md h-full w-full"
          />
        </div>
        <div className="md:block hidden" data-aos="zoom-in-down">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-mainColor my-5 ">
            {data.info[0].value}
          </h1>
          <p className="mt-2 md:text-base lg:text-lg">{data.info[1].value}</p>
        </div>
        <div data-aos="zoom-in-left">
          <img
            src={eliteGraduates_1}
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
              src={eliteGraduates_2}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
          <div>
            <img
              src={eliteGraduates_3}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img
              src={eliteGraduates_4}
              alt="Graduate"
              className="rounded-md h-full "
            />
          </div>
          <div>
            <img
              src={eliteGraduates_5}
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
              src={eliteGraduates_6}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
          <div>
            <img
              src={eliteGraduates_7}
              alt="Graduate"
              className="rounded-md h-full"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img
              src={eliteGraduates_8}
              alt="Graduate"
              className="rounded-md h-full "
            />
          </div>
          <div>
            <img
              src={eliteGraduates_9}
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
