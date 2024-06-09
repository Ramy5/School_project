import React from "react";
import EducationalImg from "../../assets/educationalCurriculum/undraw_book_lover_re_rwjy.svg";

const EducationalCurriculum = () => {
  return (
    <div className="container mx-auto py-16" data-aos="fade-up" ata-aos-duration="2000">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2 relative z-50">
          <span className="text-lg text-[#8f1537]">منهاج</span>
          <h2 className="text-3xl font-semibold text-[#8f1537]">
            الجزري التعليمي
          </h2>
          <p className="text-xl text-[#244b5a] my-10">
            يهدف منهاج الجزري التعليمي إلى إعداد جيل فاضل و سعيد و منتج و
            اجتماعي, ذو خلفية علمية من أجل عالم أفضل.
          </p>
          <button className="button">اقرأ المزيد</button>
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
