import React, { useEffect } from "react";
import StudentSchool_img from "../../assets/OurProccess/student-school.png";
import Star_img from "../../assets/OurProccess/star.png";
import Step_1 from "../../assets/OurProccess/step_1.png";
import Step_2 from "../../assets/OurProccess/step_2.png";
import Step_3 from "../../assets/OurProccess/step_3.png";
import Step_4 from "../../assets/OurProccess/step_4.png";
import DashUp from "../../assets/OurProccess/dashUp.png";
import DashDown from "../../assets/OurProccess/dashDown.png";
import Aos from "aos";

const OurProcess = ({ data }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const { info, Image, items } = data;

  const ourProcess_0 = {
    image: items[0].value,
    head: items[0].head,
    per: items[0].per,
  };

  const ourProcess_1 = {
    image: items[1].value,
    head: items[1].head,
    per: items[1].per,
  };

  const ourProcess_2 = {
    image: items[2].value,
    head: items[2].head,
    per: items[2].per,
  };

  const ourProcess_3 = {
    image: items[3].value,
    head: items[3].head,
    per: items[3].per,
  };

  return (
    <div className="container_section px-16 mt-32 mb-10">
      <div className="flex items-center gap-8">
        <div className="relative hidden md:block">
          <img
            src={Image.value}
            alt="MessageSchool"
            className="w-[415px] h-[400px]"
            data-aos="zoom-out"
          />
          <div className="absolute w-[315px] -top-[15px] -left-[80px] right-0 -z-10">
            <img src={Star_img} alt="MessageSchool" data-aos="zoom-in" />
          </div>
        </div>
        <div className="-mt-12 md:text-start text-center">
          <h2 className="font-semibold text-lg text-mainColor"> Our Process</h2>
          <h4 className="font-normal text-4xl text-mainColor">{info.value}</h4>
          <div className="flex flex-col lg:flex-row space-x-8 mt-12">
            <div className="flex flex-col sm:flex-row m-0">
              <div className="flex items-center h-fit !m-0 " data-aos="fade-up">
                <div className="text-center">
                  <img
                    src={ourProcess_0.image}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    {ourProcess_0.head}
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    {ourProcess_0.per}
                  </p>
                </div>
              </div>
              <img
                src={DashDown}
                alt="DashDown"
                className="h-11 mt-20 hidden sm:block"
              />
              <div
                className="flex items-center h-fit mt-10 sm:mt-24"
                data-aos="fade-down"
              >
                <div className="text-center">
                  <img
                    src={ourProcess_1.image}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    {ourProcess_1.head}
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    {ourProcess_1.per}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={DashUp}
              alt="DashUp"
              className="h-11 w-20 lg:w-auto !mx-auto lg:mb-24 mb-0 lg:mt-20 mt-0 rotate-180 lg:rotate-0 hidden sm:block"
            />
            <div className="flex flex-col sm:flex-row !ms-0">
              <div
                className="flex items-center h-fit !m-0 !mt-10 sm:mt-0"
                data-aos="fade-up"
              >
                <div className="text-center">
                  <img
                    src={ourProcess_2.image}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    {ourProcess_2.head}
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    {ourProcess_2.per}
                  </p>
                </div>
              </div>
              <img
                src={DashDown}
                alt="DashDown"
                className="h-11 mt-20 hidden sm:block"
              />
              <div
                className="flex items-center h-fit mt-10 sm:mt-24"
                data-aos="fade-down"
              >
                <div className="text-center">
                  <img
                    src={ourProcess_3.image}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    {ourProcess_3.head}
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    {ourProcess_3.per}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
