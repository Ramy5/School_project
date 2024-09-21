import React, { useEffect, useRef, useState } from "react";
import Testimonials_1 from "../../assets/Testimonials/Testimonials_1.svg";
import Testimonials_2 from "../../assets/Testimonials/Testimonials_2.svg";
import Testimonials_3 from "../../assets/Testimonials/Testimonials_3.svg";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("🚀 ~ Testimonials ~ activeIndex:", activeIndex);

  const TestimonialsData = [
    {
      image: Testimonials_3,
      desc: "“Elite international academy is surely a great choice for those who mainly put their focus on growing skills and discovering talents. They continously offer new experience opportunities to their students and make sure they help students figure out what they want to do with their lives.By far the best international school I've seen in Turkey so far. An amazing school with a purpose built building. It has 5 different sporting areas, an indoor basketball court, outdoor soccer and tennis court, an ice skating rink, a 25 meter swimming pool, and a huge wrestling/ self defense style gymnasium the size of the whole floor. The teacher are from a mix of western countries, like Australia, European countries, like Ukraine, and middle eastern countries. They use the American curriculum, focus on STEM and Science, issue laptops for all students in grades 4 and up, and have clubs and an after school community center”",
      name: "Mehmet ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Elite international academy is surely a great choice for those who mainly put their focus on growing skills and discovering talents. They continously offer new experience opportunities to their students and make sure they help students figure out what they want to do with their lives.By far the best international school I've seen in Turkey so far. An amazing school with a purpose built building. It has 5 different sporting areas, an indoor basketball court, outdoor soccer and tennis court, an ice skating rink, a 25 meter swimming pool, and a huge wrestling/ self defense style gymnasium the size of the whole floor. The teacher are from a mix of western countries, like Australia, European countries, like Ukraine, and middle eastern countries. They use the American curriculum, focus on STEM and Science, issue laptops for all students in grades 4 and up, and have clubs and an after school community center”",
      name: " Namik ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Elite international academy is surely a great choice for those who mainly put their focus on growing skills and discovering talents. They continously offer new experience opportunities to their students and make sure they help students figure out what they want to do with their lives.By far the best international school I've seen in Turkey so far. An amazing school with a purpose built building. It has 5 different sporting areas, an indoor basketball court, outdoor soccer and tennis court, an ice skating rink, a 25 meter swimming pool, and a huge wrestling/ self defense style gymnasium the size of the whole floor. The teacher are from a mix of western countries, like Australia, European countries, like Ukraine, and middle eastern countries. They use the American curriculum, focus on STEM and Science, issue laptops for all students in grades 4 and up, and have clubs and an after school community center”",
      name: " Namik Mehmet",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Elite international academy is surely a great choice for those who mainly put their focus on growing skills and discovering talents. They continously offer new experience opportunities to their students and make sure they help students figure out what they want to do with their lives.By far the best international school I've seen in Turkey so far. An amazing school with a purpose built building. It has 5 different sporting areas, an indoor basketball court, outdoor soccer and tennis court, an ice skating rink, a 25 meter swimming pool, and a huge wrestling/ self defense style gymnasium the size of the whole floor. The teacher are from a mix of western countries, like Australia, European countries, like Ukraine, and middle eastern countries. They use the American curriculum, focus on STEM and Science, issue laptops for all students in grades 4 and up, and have clubs and an after school community center”",
      name: "Mehmet Namik ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Elite international academy is surely a great choice for those who mainly put their focus on growing skills and discovering talents. They continously offer new experience opportunities to their students and make sure they help students figure out what they want to do with their lives.By far the best international school I've seen in Turkey so far. An amazing school with a purpose built building. It has 5 different sporting areas, an indoor basketball court, outdoor soccer and tennis court, an ice skating rink, a 25 meter swimming pool, and a huge wrestling/ self defense style gymnasium the size of the whole floor. The teacher are from a mix of western countries, like Australia, European countries, like Ukraine, and middle eastern countries. They use the American curriculum, focus on STEM and Science, issue laptops for all students in grades 4 and up, and have clubs and an after school community center”",
      name: "Mehmet Namik ",
      type: "Murat’s Parents",
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

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className="container_section mt-20 mb-32">
      <div className="text-center">
        <p className="text-mainColor font-medium">Testimonials</p>
        <h2 className="text-xl">What Parents Say about Elite school</h2>
      </div>

      <div>
        <Swiper
          spaceBetween={35}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          className="overflow-visible"
        >
          {TestimonialsData &&
            TestimonialsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mt-8 px-4 md:px-12 lg:px-40">
                  <div className="relative">
                    <img
                      src={Testimonials_1}
                      alt="Testimonials"
                      className="w-11 md:w-20"
                    />
                    <div className="flex gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <FaStar className="fill-[#FE8D4D] w-6 h-6 md:w-8 md:h-8" />
                      <FaStar className="fill-[#FE8D4D] w-6 h-6 md:w-8 md:h-8" />
                      <FaStar className="fill-[#FE8D4D] w-6 h-6 md:w-8 md:h-8" />
                      <FaStar className="fill-[#FE8D4D] w-6 h-6 md:w-8 md:h-8" />
                      <FaStar className="fill-[#FE8D4D] w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                  <p className="text-[#363848] px-4 sm:px-8 md:px-24 py-2 text-center">
                    {item.desc}
                  </p>
                  <div className="relative">
                    <img
                      src={Testimonials_2}
                      alt="Testimonials"
                      className="ml-auto w-11 md:w-20"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {TestimonialsData && TestimonialsData[activeIndex] && (
          <div className="mt-2 text-center">
            <img
              src={TestimonialsData[activeIndex].image}
              alt="Testimonials"
              className="m-auto"
            />
            <div className="text-center w-full">
              <h2 className="text-base md:text-lg">
                {TestimonialsData[activeIndex].name}
              </h2>
              <p className="text-sm md:text-base">
                {TestimonialsData[activeIndex].type}
              </p>
            </div>
          </div>
        )}

        <div className="mt-5 flex justify-center items-center">
          <div className="flex items-center gap-5">
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
      </div>
    </div>
  );
};

export default Testimonials;
