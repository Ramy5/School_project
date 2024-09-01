import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Header";
import Nav from "../NavBar/Nav";
import Landing_bg_1 from "../../assets/landingPage/landing_bg_1.png";
import Landing_bg_2 from "../../assets/landingPage/landing_bg_2.png";
import Landing_bg_3 from "../../assets/landingPage/landing_bg_3.png";
import Landing_bg_4 from "../../assets/landingPage/landing_bg_4.png";
import Landing_bg_5 from "../../assets/landingPage/landing_bg_5.png";

import "./HomeArrowsSlidesAnimation.css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { BiParagraph } from "react-icons/bi";

const LandingPage = ({ title }) => {
  const locationPath = location.pathname;

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndContent.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  const imagesAndContent = [
    {
      imageSrc: Landing_bg_1,
      title: "Welcome to Elite school,",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
    {
      imageSrc: Landing_bg_2,
      title: "Welcome to Elite school,",
      content: "We are determined to Shaping Future Leaders",
    },
    {
      imageSrc: Landing_bg_3,
      title: "Welcome to Elite school,",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
    {
      imageSrc: Landing_bg_4,
      title: "Welcome to Elite school,",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
    {
      imageSrc: Landing_bg_5,
      title: "Welcome to Elite school,",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
  ];

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full">
        <Header />
        <Nav />
      </div>
      {locationPath === "/" ? (
        <div className="text-center relative">
          <img
            src={imagesAndContent[currentIndex].imageSrc}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-screen transition-opacity duration-500 ease-in-out inline-block"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-50">
            <p className="text-mainColor font-medium text-xl mb-2">
              {imagesAndContent[currentIndex].title}
            </p>
            <h2 className="text-[#EBECF0] font-bold text-5xl">
              {imagesAndContent[currentIndex].content}
            </h2>
          </div>
        </div>
      ) : (
        <div>{title}</div>
      )}
    </div>
  );
};

export default LandingPage;

// {locationPath === "/" ? (
//   <main className="w-full">
//     <Swiper
//       grabCursor={true}
//       effect={"creative"}
//       loop
//       navigation={{
//         nextEl: ".slider_arrows_rightside",
//         prevEl: ".slider_arrows_leftside",
//       }}
//       creativeEffect={{
//         prev: {
//           shadow: true,
//           translate: ["-20%", 0, -1],
//         },
//         next: {
//           translate: ["100%", 0, 0],
//         },
//       }}
//       modules={[EffectCreative, Navigation]}
//       className="mySwiper3"
//     >
//       <SwiperSlide>
//         <video
//           style={{ width: "100%", height: "100vh", objectFit: "cover" }}
//           autoPlay
//           muted
//           loop
//         >
//           <source
//             src="https://aljazari.com.tr/wp-content/uploads/2023/12/website-slide-2023-second-version-2.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img
//           src="https://aljazari.com.tr/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-28-at-2.24.49-PM.jpeg"
//           alt=""
//           style={{ height: "100vh", width: "100%" }}
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img
//           src="https://aljazari.com.tr/wp-content/uploads/2024/05/Science-Fair_Webslider.jpg"
//           alt=""
//           style={{ height: "100vh", width: "100%" }}
//         />
//       </SwiperSlide>

//       <div className="slider_arrows_leftside">
//         <div className="slider_arrows"></div>
//         <div className="slider_arrows"></div>
//         <div className="slider_arrows"></div>
//       </div>
//       <div className="slider_arrows_rightside">
//         <div className="slider_arrows"></div>
//         <div className="slider_arrows"></div>
//         <div className="slider_arrows"></div>
//       </div>
//     </Swiper>
//   </main>
// ) : (
//   <div>{title}</div>
// )}
