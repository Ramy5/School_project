import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EliteStudio_1 from "../../assets/EliteStudio/EliteStudio_1.png";
import EliteStudio_2 from "../../assets/EliteStudio/EliteStudio_2.svg";
import EliteStudio_3 from "../../assets/EliteStudio/EliteStudio_3.svg";
import EliteStudio_4 from "../../assets/EliteStudio/EliteStudio_4.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const EliteStudio = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const EliteStudioData = [
    {
      image: EliteStudio_1,
      name: "mhmet ali",
      position_title: "English teacher",
    },
    {
      image: EliteStudio_2,
      name: "Defne sarkan",
      position_title: "Mathematics teacher",
    },
    {
      image: EliteStudio_3,
      name: "Meral fatih",
      position_title: "science teacher",
    },
    {
      image: EliteStudio_4,
      name: "Ahmet fatih",
      position_title: "Turkyie teacher",
    },
  ];

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const updateButtonStates = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

      swiper.on("slideChange", updateButtonStates);
      updateButtonStates();

      return () => {
        swiper.off("slideChange", updateButtonStates);
      };
    }
  }, []);

  return (
    <div className="my-24 mx:0 sm:mx-20">
      <div>
        <div className="mb-10 flex justify-between items-center !mx-4 sm:mx-0">
          <div className="">
            <h2 className="font-semibold text-mainColor">Elite Studio</h2>
            <p className="text-3xl mt-1">Elite Studio Podcast</p>
          </div>
          <div className="flex items-center gap-5 relative z-50">
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={`cursor-pointer ${
                isBeginning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaArrowLeftLong size={24} className="fill-mainColor" />
            </button>
            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`cursor-pointer ${
                isEnd ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaArrowRightLong size={24} className="fill-mainColor" />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {EliteStudioData &&
            EliteStudioData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full" />
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
                    <h2 className="font-semibold text-2xl uppercase whitespace-nowrap">
                      {item.name}
                    </h2>
                    <p className="whitespace-nowrap">{item.position_title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EliteStudio;
