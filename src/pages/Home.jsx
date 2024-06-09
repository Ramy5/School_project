import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import { EffectCreative, Autoplay, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <main className="absolute top-0 bottom-0 left-0 right-0">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Navigation]}
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
            className="w-full"
            src="https://aljazari.com.tr/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-28-at-2.24.49-PM.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://aljazari.com.tr/wp-content/uploads/2024/05/Science-Fair_Webslider.jpg"
            alt=""
          />
        </SwiperSlide>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </main>
  );
};

export default Home;
