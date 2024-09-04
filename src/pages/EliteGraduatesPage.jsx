import React from "react";
import { LandingPage } from "../components";
import Landing_bg_1 from "../assets/landingPage/landing_bg_1.png";
import EliteGraduates_img_1 from "../assets/EliteGraduates/EliteGraduates_2.svg";
import EliteGraduates_img_2 from "../assets/EliteGraduates/EliteGraduates_10.svg";
import EliteGraduates_img_4 from "../assets/EliteGraduates/EliteGraduates_5.svg";

const EliteGraduatesPage = () => {
  return (
    <div>
      <LandingPage title="Elite Graduates" image={Landing_bg_1} />

      <div className="mx-6 md:mx-12 lg:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-4">Elite Graduates</h2>

          <div className="my-12">
            <div className="flex lg:flex-row flex-col-reverse gap-x-40 gap-y-5">
              <p className="text-xl mb-4 text-[#0009]">
                The High School Diploma program is designed to span four years,
                comprising eight semesters, with students required to earn a
                total of 30 credits for completion. The curriculum is
                comprehensive, offering diverse coursework and opportunities for
                independent study, appealing to those seeking further academic
                challenges. Beyond traditional classroom settings, students can
                participate in learning support programs, engaging projects, and
                even design their own courses, aiming to foster a well-rounded
                education that goes beyond conventional textbook learning.
              </p>
              <img src={EliteGraduates_img_1} alt="Recipe" className="w-full hfull" />
            </div>
          </div>

          <div className="my-12">
            <div className="flex lg:flex-row flex-col-reverse gap-x-40 gap-y-5">
              <p className="text-xl mb-4 text-[#0009]">
                The school places great importance on providing a supportive
                learning environment, encouraging students to seek guidance and
                regular advising for informed educational decisions aligned with
                their interests and aspirations. By actively participating in
                their learning journey, students develop a consistent
                understanding of the material, empowering them to take ownership
                of their academic progress. Each credit requires successful
                completion of a minimum of 120 highly focused contact hours,
                varying based on the subject and curriculum. This ensures
                students gain a deep understanding of the topics they study,
                making their educational experience more meaningful and
                rewarding.
              </p>
              <img src={EliteGraduates_img_4} alt="Recipe" />
            </div>
          </div>
          <div className="mt-12 mb-48">
            <div className="flex lg:flex-row flex-col-reverse gap-x-40 gap-y-5">
              <p className="text-xl mb-4 text-[#0009]">
                The High School Diploma program structures each course within a
                subject area to represent a full year’s worth of credit. This
                approach allows students to delve deeper into their chosen
                fields of study, building a strong foundation of knowledge and
                expertise. The school’s aim is to prepare students for a
                successful future beyond high school by providing a
                well-structured and dynamic learning environment. The
                combination of rigorous coursework, independent study
                opportunities, and personalized learning experiences equips
                students with the skills and knowledge needed to thrive in their
                academic pursuits and beyond.
              </p>
              <img src={EliteGraduates_img_2} alt="Recipe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteGraduatesPage;
