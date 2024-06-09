import React, { useEffect, useState, useRef } from "react";
import Cam_1 from "../../assets/campuses/01.jpg";
import Cam_2 from "../../assets/campuses/02.jpg";
import Cam_3 from "../../assets/campuses/03.jpg";
import Cam_4 from "../../assets/campuses/04.jpg";
import Cam_5 from "../../assets/campuses/05.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Campuses = () => {
  const [scrollY, setScrollY] = useState(0);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

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

  const clipScroll = (scrollY - 500) * 3.5;

  const campusesData = [
    {
      image: Cam_1,
      title: "مدرسة الجزري",
      desc: "الدولية للعلوم والتكنولوجيا",
      branch: "فرع أتاكنت ",
    },
    {
      image: Cam_2,
      title: "مدرسة الجزري",
      desc: "الدولية للعلوم والتكنولوجيا",
      branch: "فرع أتاكنت ",
    },
    {
      image: Cam_3,
      title: "مدرسة الجزري",
      desc: "الدولية للعلوم والتكنولوجيا",
      branch: "فرع أتاكنت ",
    },
    {
      image: Cam_4,
      title: "مدرسة الجزري",
      desc: "الدولية للعلوم والتكنولوجيا",
      branch: "فرع أتاكنت ",
    },
    {
      image: Cam_5,
      title: "مدرسة الجزري",
      desc: "الدولية للعلوم والتكنولوجيا",
      branch: "فرع أتاكنت ",
    },
  ];

  return (
    <div ref={secondSectionRef} className="h-screen">
      <div className="relative w-full h-screen">
        <div
          className="campuses_image"
          style={{
            clipPath: `circle(${clipScroll}px at center)`,
          }}
        >
          <div
            className={`${
              clipScroll >= 220 ? "flex flex-col md:flex-row" : "none"
            } w-full h-screen`}
          >
            {campusesData &&
              campusesData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full md:w-1/5 h-1/5 md:h-full cursor-pointer duration-200 hover:w-full md:hover:w-1/3"
                  data-aos="fade-down"
                  data-aos-duration={500 + index * 100}
                >
                  <img
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full"
                  />
                  <div className="absolute top-1/2 md:top-3/4 left-1/4 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 w-full text-center text-white">
                    <h2 className="text-3xl font-semibold">{item.title}</h2>
                    <p className="text-2xl my-3"> {item.desc} </p>
                    <span className="text-lg font-semibold">
                      {" "}
                      {item.branch}{" "}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campuses;
