import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsAnnouncement_1 from "../../assets/NewsAnnouncement/NewsAnnouncement_1.svg";
import NewsAnnouncement_2 from "../../assets/NewsAnnouncement/NewsAnnouncement_2.svg";
import NewsAnnouncement_3 from "../../assets/NewsAnnouncement/NewsAnnouncement_3.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const NewsAnnouncement = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const NewsAnnouncementData = [
    {
      image: NewsAnnouncement_1,
      title: "Jobs, career presentation to Coincide with Conference",
      date: "By Admin, on Nov 23th, 2020  |   1 days ago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
    },
    {
      image: NewsAnnouncement_2,
      title: "Jobs, career presentation to Coincide with Conference",
      date: "By Admin, on Nov 23th, 2020  |   1 days ago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
    },
    {
      image: NewsAnnouncement_3,
      title: "Jobs, career presentation to Coincide with Conference",
      date: "By Admin, on Nov 23th, 2020  |   1 days ago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
    },
    {
      image: NewsAnnouncement_1,
      title: "Jobs, career presentation to Coincide with Conference",
      date: "By Admin, on Nov 23th, 2020  |   1 days ago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
    },
    {
      image: NewsAnnouncement_2,
      title: "Jobs, career presentation to Coincide with Conference",
      date: "By Admin, on Nov 23th, 2020  |   1 days ago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
    },
    {
      image: NewsAnnouncement_3,
      title: "Jobs, career presentation to Coincide with Conference",
      date: "By Admin, on Nov 23th, 2020  |   1 days ago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
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
    <div className=" my-16 mx:0 sm:mx-20">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-mainColor mb-3">
          News & Announcement
        </h2>
        <p className="text-[#0009] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={35}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {NewsAnnouncementData &&
            NewsAnnouncementData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="main_shadow p-4 my-2 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-full" />
                  <div className="text-start">
                    <h2 className="font-semibold text-2xl mt-5">
                      {item.title}
                    </h2>
                    <p className="my-2 text-[#A3ABB6]">{item.date}</p>
                    <p className="text-[#080A12]">{item.desc}</p>
                    <button className="text-mainColor font-medium my-3">
                      Read more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="mb-10 mt-4 flex justify-between items-center !mx-4 sm:mx-0">
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
          <div>
            <button className="border-2 border-mainColor rounded-lg py-2 px-4 text-mainColor font-medium hover:bg-mainColor hover:text-white">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAnnouncement;