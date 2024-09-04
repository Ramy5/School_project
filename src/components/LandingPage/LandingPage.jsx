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
import DropDownNavBar from "../DropDownNavBar/DropDownNavBar";
import { Link } from "react-router-dom";

const LandingPage = ({ content, title, subTitle, image }) => {
  const locationPath = location.pathname;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [dropdownNavBar, setDropdownNavBar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndContent.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const imagesAndContent = [
    // {
    //   imageSrc: Landing_bg_1,
    //   title: "Elite Academy International School",
    //   content: "The New Turkish International school, For Primary & Secondary.",
    // },
    {
      imageSrc: Landing_bg_2,
      title: "Elite Academy International School",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
    {
      imageSrc: Landing_bg_3,
      title: "Elite Academy International School",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
    {
      imageSrc: Landing_bg_4,
      title: "Elite Academy International School",
      content: "The New Turkish International school, For Primary & Secondary.",
    },
    // {
    //   imageSrc: Landing_bg_5,
    //   title: "Elite Academy International School",
    //   content: "The New Turkish International school, For Primary & Secondary.",
    // },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full">
        <Header />
        <Nav setDropdownNavBar={setDropdownNavBar} />
      </div>
      <div>
        <DropDownNavBar
          dropdownNavBar={dropdownNavBar}
          setDropdownNavBar={setDropdownNavBar}    
        />
      </div>
      {locationPath === "/" ? (
        <div className="text-center relative">
          <img
            src={imagesAndContent[currentIndex].imageSrc}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-screen transition-opacity duration-500 ease-in-out inline-block object-cover"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-40 w-[80%] sm:w-[60%] md:w-[55%] lg:w-[50%]">
            <p className="text-mainColor font-medium text-xl mb-4">
              {imagesAndContent[currentIndex].title}
            </p>
            <h2 className="text-[#EBECF0] font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              {imagesAndContent[currentIndex].content}
            </h2>
          </div>
        </div>
      ) : (
        <div className="">
          <div>
            <img
              src={image}
              alt={title}
              className={`w-full h-[600px]  md:h-full max-w-full transition-opacity duration-500 ease-in-out inline-block bg-cover bg-center object-cover ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
          <div className="absolute w-max top-1/2 -translate-y-1/2 text-center md:text-right left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0  mt-12 mx-0 md:mx-20">
            <h2 className="font-bold text-4xl text-white mb-4">{title}</h2>
            <ul className="flex gap-2 text-white justify-center md:justify-start">
              <li className="text-white font-bold cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li>|</li>
              <li className="text-white rounded-xl font-bold cursor-pointer">
                {title}
              </li>
            </ul>
          </div>
          {content}
        </div>
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
