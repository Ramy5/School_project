import React from "react";
import EducationalImg from "../../assets/educationalCurriculum/undraw_book_lover_re_rwjy.svg";

const EducationalCurriculum = () => {
  return (
    <div
      className="container mx-auto py-16"
      data-aos="fade-up"
      ata-aos-duration="2000"
    >
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2 relative z-50">
          <span className="text-lg text-[#8f1537]">ALJAZARI</span>
          <h2 className="text-3xl font-semibold text-[#8f1537]">
            LEARNING PROGRAM
          </h2>
          <p className="text-xl text-[#244b5a] my-10">
            The program aims to educate and nurture a virtuous, happy,
            scientific, productive and social generation for a better world.
          </p>
          <button className="button">READ MORE</button>
        </div>
        <div className="relative w-1/2 flex justify-end">
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
