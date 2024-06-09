import React, { useEffect, useState, useRef } from "react";
import Cam_1 from "../../assets/campuses/01.jpg";
import Cam_2 from "../../assets/campuses/02.jpg";
import Cam_3 from "../../assets/campuses/03.jpg";
import Cam_4 from "../../assets/campuses/04.jpg";
import Cam_5 from "../../assets/campuses/05.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Campuses = () => {
  const [scrollY, setScrollY] = useState(0);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
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

  const clipScroll = (scrollY - 500) * 2.8;

  return (
    <div ref={secondSectionRef} className="h-screen">
      <div className="relative w-full h-screen">
        <div
          className="campuses_image"
          style={{
            clipPath: `circle(${clipScroll}px at center)`, // Adjusting the scrollY to start from 750px
          }}
        >
          <div
            className={`${clipScroll >= 250 ? "flex" : "none"} w-full h-screen`}
          >
            <img
              src={Cam_1}
              alt="Image 1"
              data-aos="fade-down"
              data-aos-delay="1000"
              className="w-1/5"
            />
            <img
              src={Cam_2}
              alt="Image 2"
              data-aos="fade-down"
              data-aos-delay="1500"
              className="w-1/5"
            />
            <img
              src={Cam_3}
              alt="Image 3"
              data-aos="fade-down"
              data-aos-delay="2000"
              className="w-1/5"
            />
            <img
              src={Cam_4}
              alt="Image 4"
              data-aos="fade-down"
              data-aos-delay="2500"
              className="w-1/5"
            />
            <img
              src={Cam_5}
              alt="Image 5"
              data-aos="fade-down"
              data-aos-delay="3000"
              className="w-1/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campuses;

// <div
// className="absolute top-1/2 left-1/2"
// style={{ shapeOutside: "circle(50%)" }}
// >
// <p>ALJAZARI SCHOOLS •</p>
// </div>
