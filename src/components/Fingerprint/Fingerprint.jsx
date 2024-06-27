import React from "react";
import FingerImg from "../../assets/fingerPrint/student.jpg";

const Fingerprint = () => {
  return (
    <div
      className="container py-16 mx-auto"
      data-aos="fade-up"
      ata-aos-duration="2000"
    >
      <div className="flex items-center justify-between w-full">
        <div className="w-[60%] relative z-50">
          <h2 className="text-3xl font-semibold text-mainColor">ELITE WAY </h2>
          <p className="text-xl text-[#244b5a] my-10">
            Aljazari International Schools, which laid the foundations of a
            unique educational system with original steps in the journey of
            science and knowledge, is a pioneer in international Education.
            Aljazari International Schools offers students the opportunity to
            discover their interests and abilities with professionally designed
            programs developed by the schools.
          </p>
          <button className="button">READ MORE </button>
        </div>
        <div className="relative w-[40%] flex justify-end">
          <div className="bg-[#f1f2f2] rounded-full absolute top-16 right-48 w-[400px] h-[400px]"></div>
          <img
            src={FingerImg}
            alt="Finger print"
            className="rounded-full w-[400px] h-[400px] relative z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Fingerprint;
