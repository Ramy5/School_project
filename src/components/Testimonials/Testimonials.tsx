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

  const TestimonialsData = [
    {
      image: Testimonials_3,
      desc: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur”",
      name: "Mehmet Namik ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur”",
      name: "Mehmet Namik ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur”",
      name: "Mehmet Namik ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur”",
      name: "Mehmet Namik ",
      type: "Murat’s Parents",
    },
    {
      image: Testimonials_3,
      desc: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur”",
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
  return (
    <div className="container_section my-20">
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
        >
          {TestimonialsData &&
            TestimonialsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mt-8 px-4 md:px-12 lg:px-40 min-h-[420px]">
                  <div className="relative">
                    <img src={Testimonials_1} alt="Testimonials" />
                    <div className="flex gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <FaStar size={30} className="fill-[#FE8D4D]" />
                      <FaStar size={30} className="fill-[#FE8D4D]" />
                      <FaStar size={30} className="fill-[#FE8D4D]" />
                      <FaStar size={30} className="fill-[#FE8D4D]" />
                      <FaStar size={30} className="fill-[#FE8D4D]" />
                    </div>
                  </div>
                  <p className="text-[#363848] px-24 text-center">
                    {item.desc}
                  </p>
                  <div className="relative">
                    <img
                      src={Testimonials_2}
                      alt="Testimonials"
                      className="ml-auto"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20">
                      <img
                        src={item.image}
                        alt="Testimonials"
                        className="m-auto"
                      />
                      <div className="text-center w-fit">
                        <h2>{item.name}</h2>
                        <p>{item.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="mb-10 mt-8 flex justify-center items-center">
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
