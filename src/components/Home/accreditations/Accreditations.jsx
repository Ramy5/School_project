import { useEffect } from "react";
import styled from "./Accreditations.module.css";
import Aos from "aos";
import Accreditations_1 from "../../../assets/Accreditations/Accreditations_1.svg";
import Accreditations_2 from "../../../assets/Accreditations/Accreditations_2.svg";
import Accreditations_3 from "../../../assets/Accreditations/Accreditations_3.svg";
import Accreditations_4 from "../../../assets/Accreditations/Accreditations_4.svg";
import Accreditations_5 from "../../../assets/Accreditations/Accreditations_5.svg";
import Accreditations_6 from "../../../assets/Accreditations/Accreditations_6.svg";
import Accreditations_7 from "../../../assets/Accreditations/Accreditations_7.svg";
import Accreditations_8 from "../../../assets/Accreditations/Accreditations_8.svg";

const Accreditations = ({ data }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const AccreditationsData = data.items.map((item) => ({
    image: item.value,
  }));

  return (
    <section className="my-16" data-aos="fade-up">
      <div className="my-16 mx-4 sm:mx-20">
        <h2 className="text-center text-mainColor font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 ">
          {data.info[0].value}
        </h2>
        <p
          data-aos="fade-up"
          className="text-center mb-20 text-lg md:text-xl xl:text-2xl leading-9"
        >
          {data.info[1].value}
        </p>
      </div>

      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-4">
        {AccreditationsData &&
          AccreditationsData.map((item, index) => (
            <div
              className="flex items-center justify-center w-full p-14 border border-mainColor"
              key={index}
            >
              <img
                data-aos="fade-up"
                className="w-32 h-32 hover:!filter-none transition-all duration-200"
                style={{ filter: "grayscale(100%)" }}
                src={item.image}
                alt=""
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Accreditations;
