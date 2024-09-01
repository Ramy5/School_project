import React from "react";
import StudentSchool_img from "../../assets/OurProccess/student-school.png";
import Star_img from "../../assets/OurProccess/star.png";
import Step_1 from "../../assets/OurProccess/step_1.png";
import Step_2 from "../../assets/OurProccess/step_2.png";
import Step_3 from "../../assets/OurProccess/step_3.png";
import Step_4 from "../../assets/OurProccess/step_4.png";
import DashUp from "../../assets/OurProccess/dashUp.png";
import DashDown from "../../assets/OurProccess/dashDown.png";

const OurProcess = () => {
  const processSteps = [
    {
      index: 1,
      image: Step_4,
      title: "Apply Now",
      desc: "Kids Learn Chess the Fun and Easy Way Offered by Udemy.",
    },
    {
      index: 2,
      image: Step_3,
      title: "Fill Student Form",
      desc: "Kids Learn Chess the Fun and Easy Way Offered by Udemy.",
    },
    {
      index: 3,
      image: Step_2,
      title: "Choose Your Classes",
      desc: "Kids Learn Chess the Fun and Easy Way Offered by Udemy.",
    },
    {
      index: 4,
      image: Step_1,
      title: "Join Our School",
      desc: "Kids Learn Chess the Fun and Easy Way Offered by Udemy.",
    },
  ];
  console.log("🚀 ~ OurProcess ~ processSteps:", processSteps);

  return (
    <div className="container_section px-16 mt-32 mb-10">
      <div className="flex items-center gap-8">
        <div className="relative hidden md:block">
          <img
            src={StudentSchool_img}
            alt="MessageSchool"
            className="w-[415px] h-[400px]"
          />
          <div className="absolute w-[315px] -top-[15px] -left-[80px] right-0 -z-10">
            <img src={Star_img} alt="MessageSchool" />
          </div>
        </div>
        <div className="-mt-12 md:text-start text-center">
          <h2 className="font-semibold text-lg text-mainColor"> Our Process</h2>
          <h4 className="font-normal text-4xl text-mainColor">
            Enabling Our Students To Learn
          </h4>
          <div className="flex flex-col lg:flex-row space-x-8 mt-12">
            <div className="flex flex-col sm:flex-row m-0">
              <div className="flex items-center h-fit !m-0 ">
                <div className="text-center">
                  <img
                    src={Step_4}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    Apply Now
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    Kids Learn Chess the Fun and Easy Way Offered by Udemy.
                  </p>
                </div>
              </div>
              <img src={DashDown} alt="DashDown" className="h-11 mt-20 hidden sm:block" />
              <div className="flex items-center h-fit mt-10 sm:mt-24">
                <div className="text-center">
                  <img
                    src={Step_3}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    Fill Student Form
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    Kids Learn Chess the Fun and Easy Way Offered by Udemy.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={DashUp}
              alt="DashUp"
              className="h-11 w-20 lg:w-auto !mx-auto lg:mb-24 mb-0 lg:mt-20 mt-0 rotate-180 lg:rotate-0 hidden sm:block"
            />
            <div className="flex flex-col sm:flex-row !ms-0">
              <div className="flex items-center h-fit !m-0 !mt-10 sm:mt-0">
                <div className="text-center">
                  <img
                    src={Step_2}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    Choose Your Classes
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    Kids Learn Chess the Fun and Easy Way Offered by Udemy.
                  </p>
                </div>
              </div>
              <img src={DashDown} alt="DashDown" className="h-11 mt-20 hidden sm:block" />
              <div className="flex items-center h-fit mt-10 sm:mt-24">
                <div className="text-center">
                  <img
                    src={Step_1}
                    alt="step"
                    className="w-32 h-32 block m-auto"
                  />
                  <h2 className="text-mainColor font-medium text-xl mt-4 mb-2">
                    Join Our School
                  </h2>
                  <p className="text-mainColor font-normal text-[15px]">
                    Kids Learn Chess the Fun and Easy Way Offered by Udemy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

// <div className="flex space-x-8 mt-12">
// {processSteps &&
//   processSteps.map((process) => {
//     console.log("🚀 ~ OurProcess ~ index:", process.index);

//     return (
//       <div
//         key={process.index}
//         className="flex items-center h-fit !m-0"
//       >
//         <div
//           className={`${
//             process.index === 2 || process.index === 4
//               ? "mt-24"
//               : ""
//           } text-center`}
//         >
//           <img
//             src={process.image}
//             alt="step"
//             className="w-32 h-32 block m-auto"
//           />
//           <h2 className="text-mainColor font-medium text-xl mt-4 mb-2 whitespace-nowrap">
//             {process.title}
//           </h2>
//           <p className="text-mainColor font-normal text-[15px]">
//             {process.desc}
//           </p>
//         </div>
//         {process.index === 2 ? (
//           <img src={DashUp} alt="DashUp" className="h-11 mb-24" />
//         ) : process.index === 1 || process.index === 3 ? (
//           <img src={DashDown} alt="DashDown" className="h-11 mb-8" />
//         ) : (
//           ""
//         )}
//       </div>
//     );
//   })}
// </div>
