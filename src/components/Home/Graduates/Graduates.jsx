import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import graduatedOne from "../../../assets/Graduates/1.svg";
import { useEffect, useState } from "react";

const Graduates = () => {
  const [showPoster, setShowPoster] = useState(false);
  console.log("🚀 ~ Graduates ~ showPoster:", showPoster);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showPoster]);

  return (
    <section className="main__padding-section">
      <h2 className="main__head mb-0">ALJAZARI GRADUATES</h2>
      <p className="text-center text-2xl mb-24 text-gray-500">
        Aljazari School of Science and Technology
      </p>

      <div className="mb-40">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          spaceBetween={"50px"}
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative h-[35rem]">
            <div className=" opacity-100 block h-full">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[35rem]">
            <div className=" opacity-100 block h-full">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[35rem]">
            <div className=" opacity-100 block h-full">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className=" opacity-100 block h-full">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[35rem]">
            <div className=" opacity-100 block h-full">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Graduates;
