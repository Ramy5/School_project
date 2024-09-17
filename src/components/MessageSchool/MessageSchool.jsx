import React, { useEffect } from "react";
import { LuMoveRight } from "react-icons/lu";
import signature_img from "../../assets/MessageSchool/signature_img.png";
import Aos from "aos";

const MessageSchool = ({ data }) => {

  const { Image = [], items = [] } = data || {};
  const messageImage = Image[0]?.value || '';
  
  const getItemValue = (key) => items.find((item) => item.key === key)?.value || '';
  const messageHead = getItemValue('head');
  const messageTitle = getItemValue('title');
  const messageParagraph = getItemValue('par');

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container_section px-4 sm:px-16 my-32 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-10 items-center">
        <div className="relative h-[450px] col-span-3" data-aos="fade-right">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 ms-36 hidden md:block">
            <div className="w-72 h-72 border-dashed border-2 border-mainColor rounded-full flex items-center justify-center">
              <div className="w-56 h-56 bg-mainColor rounded-full"></div>
            </div>
          </div>
          <img
            src={messageImage}
            alt="MessageSchool"
            className="w-full md:w-3/4 lg:w-full h-full"
          />
        </div>
        <div className="mt-8 lg:mt-0 col-span-7" data-aos="fade-left">
          <h2 className="font-bold text-3xl text-mainColor ms-0 lg:ms-12">
            {messageHead}
          </h2>
          <div className="ms-0 lg:ms-44 mt-8">
            <h4 className="text-[#2E2C2C] font-normal text-4xl">
              {messageTitle}
            </h4>
            <p className="text-[#0A0A0A] font-normal text-base my-5">
              {messageParagraph}
            </p>
            <img src={signature_img} alt="signature" className="w-40" />
            <button className="flex items-end gap-2 mt-4 group">
              <span className="text-mainColor font-normal text-2xl">
                Read More{" "}
              </span>
              <LuMoveRight
                size={20}
                className="text-mainColor mb-[1.5px] transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSchool;
