import React from "react";
import Header from "../Header/Header";
import Nav from "../NavBar/Nav";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LandingPage = ({ title }) => {
  const locationPath = location.pathname;
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full">
        <Header />
        <Nav />
      </div>
      {locationPath === "/" ? (
        <main className="w-full">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="h-full mySwiper3"
          >
            <SwiperSlide>
              <video
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                autoPlay
                muted
                loop
              >
                <source
                  src="https://aljazari.com.tr/wp-content/uploads/2023/12/website-slide-2023-second-version-2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://aljazari.com.tr/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-28-at-2.24.49-PM.jpeg"
                alt=""
                style={{ height: "100vh", width:"100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://aljazari.com.tr/wp-content/uploads/2024/05/Science-Fair_Webslider.jpg"
                alt=""
                style={{ height: "100vh", width:"100%" }}
              />
            </SwiperSlide>
          </Swiper>
        </main>
      ) : (
        <div>{title}</div>
      )}
    </div>
  );
};

export default LandingPage;