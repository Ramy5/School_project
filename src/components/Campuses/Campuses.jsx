import React, { useEffect, useState, useRef, Fragment } from "react";
import Cam_1 from "../../assets/campuses/01.jpg";
import Cam_2 from "../../assets/campuses/02.jpg";
import Cam_3 from "../../assets/campuses/03.jpg";
import Cam_4 from "../../assets/campuses/04.jpg";
import Cam_5 from "../../assets/campuses/05.jpg";
import "aos/dist/aos.css";
import { useParallax } from "react-scroll-parallax";

const Campuses = () => {
  const [scrollY, setScrollY] = useState();
  const [scrollTimeout, setScrollTimeout] = useState(null); // Introduce state for scroll timeout
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear the previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      // Set a new timeout to handle scroll slowly
      const timeout = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 8); // Adjust this value to control the speed
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear timeout when component unmounts
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollY(window.scrollY);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  const clipScroll = (scrollY - 550) * 3.5;

  const campusesData = [
    {
      index: 1,
      image: Cam_1,
      title: " Aljazari International ",
      desc: " School of Science and Technology",
      branch: " Atakent Int. Campus",
    },
    {
      index: 2,
      image: Cam_2,
      title: " Aljazari International ",
      desc: " School of Science and Technology",
      branch: " Atakent Int. Campus",
    },
    {
      index: 2,
      image: Cam_3,
      title: " Aljazari International ",
      desc: " School of Science and Technology",
      branch: " Atakent Int. Campus",
    },
    {
      index: 3,
      image: Cam_4,
      title: " Aljazari International ",
      desc: " School of Science and Technology",
      branch: " Atakent Int. Campus",
    },
    {
      index: 5,
      image: Cam_5,
      title: " Aljazari International ",
      desc: " School of Science and Technology",
      branch: " Atakent Int. Campus",
    },
  ];

  const text = "E L I T E A C A D E M Y        ";

  const parallax = useParallax({
    rotate: [0, 360],
  });

  return (
    <div ref={secondSectionRef} className="h-[120vh] mt-40">
      <div className="relative w-full h-full">
        <div
          className={`${
            clipScroll >= 300 && "hidden"
          } absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 spinner`}
          ref={parallax.ref}
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="absolute text-[#d79a29] font-semibold text-4xl"
              style={{
                transform: `rotate(${
                  index * (400 / text.length)
                }deg) translate(100px) rotate(-${
                  index * (360 / text.length)
                }deg)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <div
          className="h-full campuses_image"
          style={{
            clipPath: `circle(${clipScroll}px at center)`,
          }}
        >
          {clipScroll >= 230 && (
            <div className="flex h-full">
              {campusesData &&
                campusesData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`camp-${index} relative h-1/5 md:h-full cursor-pointer campuse_animation !duration-500 !transition-all w-1/5 hover:w-[30%]`}
                    >
                      <img
                        src={item.image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full"
                      />
                      <div className="absolute w-full text-center text-white -translate-y-1/2 top-1/2 md:top-3/4 left-1/4 md:left-1/2 md:-translate-x-1/2">
                        <h2 className="text-3xl font-semibold">{item.title}</h2>
                        <p className="my-3 text-2xl"> {item.desc} </p>
                        <span className="text-lg font-semibold">
                          {" "}
                          {item.branch}{" "}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Campuses;
