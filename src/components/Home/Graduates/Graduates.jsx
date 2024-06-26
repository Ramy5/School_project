import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Graduates.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import graduatedOne from "../../../assets/Graduates/1.svg";
import { useEffect, useState } from "react";

const Graduates = () => {
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showPoster]);

  return (
    <section className="main__padding-section">
      <h2 className="mb-0 main__head">ALJAZARI GRADUATES</h2>
      <p className="mb-24 text-2xl text-center text-gray-500">
        Aljazari School of Science and Technology
      </p>

      <div className="mb-40">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={200}
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
                src="https://www.youtube.com/embed/MDVAX1YZWEc"
                title="George Mahfoud"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[40rem]">
            <div className="block h-full overflow-hidden opacity-100 rounded-[3rem]">
              <img
                onClick={() => setShowPoster(true)}
                style={{
                  backgroundImage:
                    "url(https://aljazari.com.tr/wp-content/uploads/2023/05/George-Mahfoud-copy-min.jpg)",
                  display: "block",
                }}
                className={`${
                  showPoster && "!hidden"
                } absolute top-0 left-0 h-full transition-all duration-300 z-10 w-full bg-slate-300 bg-cover bg-center p-40 bg-no-repeat rounded-[3rem]`}
                src={graduatedOne}
                alt="graduated 1"
              />
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-[3rem]"
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
