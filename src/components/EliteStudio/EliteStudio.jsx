import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EliteStudio_1 from "../../assets/EliteStudio/EliteStudio_1.png";
import EliteStudio_2 from "../../assets/EliteStudio/EliteStudio_2.png";
import EliteStudio_3 from "../../assets/EliteStudio/EliteStudio_3.png";
import EliteStudio_4 from "../../assets/EliteStudio/EliteStudio_4.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos";

const EliteStudio = ({ data }) => {

  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const EliteStudioData = data.items.map((item, index) => ({
    image: item.value,
    per: item.per,
    title: item.head,
  }));

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
        <div
          className="mb-10 flex justify-between items-center !mx-4 sm:mx-0"
          data-aos="zoom-in-down"
        >
          <div className="">
            <h2 className="font-semibold text-mainColor">
              {data.info[0].value}
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl mt-1">
              {data.info[1].value}
            </p>
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
        <div data-aos="zoom-in-up">
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
                    <img src={item.image} alt={item.title} className="w-full" />
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
                      <h2 className="font-semibold text-2xl uppercase whitespace-nowrap">
                        {item.title}
                      </h2>
                      <p className="whitespace-nowrap">{item.per}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EliteStudio;
