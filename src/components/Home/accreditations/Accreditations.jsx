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

const Accreditations = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const AccreditationsData = [
    { image: Accreditations_1 },
    { image: Accreditations_2 },
    { image: Accreditations_3 },
    { image: Accreditations_4 },
    { image: Accreditations_5 },
    { image: Accreditations_6 },
    { image: Accreditations_7 },
    { image: Accreditations_8 },
  ];

  return (
    <section className="my-16" data-aos="fade-up">
      <h2 className="text-center text-mainColor font-semibold text-5xl mb-5">
        ACCREDITATIONS
      </h2>
      <p data-aos="fade-up" className="text-center mb-20 text-2xl leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>

      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4">
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
