import React from "react";
import EliteGraduates_1 from "../../assets/EliteGraduates/EliteGraduates_1.svg";
import EliteGraduates_2 from "../../assets/EliteGraduates/EliteGraduates_2.svg";
import EliteGraduates_3 from "../../assets/EliteGraduates/EliteGraduates_3.svg";
import EliteGraduates_4 from "../../assets/EliteGraduates/EliteGraduates_4.svg";
import EliteGraduates_5 from "../../assets/EliteGraduates/EliteGraduates_5.svg";
import EliteGraduates_6 from "../../assets/EliteGraduates/EliteGraduates_6.svg";
import EliteGraduates_7 from "../../assets/EliteGraduates/EliteGraduates_7.svg";
import EliteGraduates_8 from "../../assets/EliteGraduates/EliteGraduates_8.svg";
import EliteGraduates_9 from "../../assets/EliteGraduates/EliteGraduates_9.svg";
import EliteGraduates_10 from "../../assets/EliteGraduates/EliteGraduates_10.svg";

const EliteGraduates = () => {
  return (
    <div className="bg-white p-8 container_section">
      <div className="text-center mb-4 flex justify-between">
        <div>
          <img
            src={EliteGraduates_1}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
        <div className="">
          <h1 className="text-6xl font-bold text-mainColor my-5">
            Elite Graduates
          </h1>
          <p className="mt-2 text-lg">
            But I Must Explain To You How All This Mistaken Idea Of Denouncing
            Pleasure <br/> And Praising Pain Was Born And I Will Give You A Cete
            Account Of The System
          </p>
        </div>
        <div>
          <img
            src={EliteGraduates_2}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div>
          <img
            src={EliteGraduates_3}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
        <div>
          <img
            src={EliteGraduates_4}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
        <div>
          <img
            src={EliteGraduates_5}
            alt="Graduate"
            className="rounded-md h-full "
          />
        </div>
        <div>
          <img
            src={EliteGraduates_6}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <div>
          <img
            src={EliteGraduates_7}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
        <div>
          <img
            src={EliteGraduates_8}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
        <div>
          <img
            src={EliteGraduates_9}
            alt="Graduate"
            className="rounded-md h-full "
          />
        </div>
        <div>
          <img
            src={EliteGraduates_10}
            alt="Graduate"
            className="rounded-md h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EliteGraduates;
