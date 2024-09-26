import { useEffect, useState } from "react";
import Aos from "aos";

const Campuses = ({ data }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    Aos.init({ duration: 500 });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-full overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      id="campus-section"
    >
      {data.items.slice(0, 4).map((item, index) => (
        <div
          key={index}
          className="relative md:h-full cursor-pointer !duration-500 !transition-all w-full"
          data-aos-delay={index * 150}
          data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
        >
          <img
            src={`https://elite.medicalvisionarabia.com/storage/image/hero/${item.value}`}
            alt={`Campuses_${index + 1}`}
            className="h-full w-full bg-cover bg-center duration-300 transform md:hover:scale-105"
          />
          <div className="absolute w-full text-center text-white -translate-y-1/2 top-[80%] left-1/2 -translate-x-1/2">
            <h2 className="text-3xl font-semibold">{item.info[0].value}</h2>
            <p className="my-3 text-2xl">{item.info[1].value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campuses;
