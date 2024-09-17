import React, { useEffect, useState } from "react";
import schoolType_1 from "../../assets/schoolType/schoolType_1.png";
import schoolType_2 from "../../assets/schoolType/schoolType_2.png";
import schoolType_3 from "../../assets/schoolType/schoolType_3.png";
import "aos/dist/aos.css";
import { LuMoveRight } from "react-icons/lu";
import Aos from "aos";

const SchoolType = ({ data }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const schoolType = data.items.map((item, index) => ({
    index: index + 1,
    image: item.value,
    title: item.head,
  }));

  useEffect(() => {
    Aos.init({ duration: 1000 });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden container_section md:px-16 my-16">
      <div className="flex flex-col md:flex-row w-full h-full ">
        {schoolType &&
          schoolType.map((item, index) => {
            return (
              <div
                key={index}
                data-aos-delay={index * 250}
                data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
                className={`relative h-1/3 md:h-full cursor-pointer !duration-500 !transition-all w-full md:w-1/3 md:hover:w-[30%]`}
              >
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full bg-cover bg-center object-cover "
                />
                <div className="absolute w-full text-center text-white -translate-y-1/2 top-1/2 md:top-3/4  left-1/2 -translate-x-1/2">
                  <h2 className="text-3xl font-semibold">{item.title}</h2>
                  <p className="my-3 text-2xl"> {item.desc} </p>
                  <span className="text-lg font-semibold"> {item.branch} </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SchoolType;
