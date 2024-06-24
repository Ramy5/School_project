import React from "react";
import EducationalImg from "../../assets/educationalCurriculum/undraw_book_lover_re_rwjy.svg";

const EducationalCurriculum = () => {
  return (
    <div
      className="container py-16 mx-auto"
      data-aos="fade-up"
      ata-aos-duration="2000"
    >
      <div className="flex items-center justify-between w-full">
        <div className="relative z-50 w-1/2">
          <span className="text-lg text-mainColor">ALJAZARI</span>
          <h2 className="text-3xl font-semibold text-mainColor">
            LEARNING PROGRAM
          </h2>
          <p className="my-10 text-xl text-gray-800">
            The program aims to educate and nurture a virtuous, happy,
            scientific, productive and social generation for a better world.
          </p>
          <button className="button">READ MORE</button>
        </div>
        <div className="relative flex justify-end w-1/2">
          <img
            src={EducationalImg}
            alt="Finger print"
            className="w-[80%] h-[80%] relative z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationalCurriculum;
