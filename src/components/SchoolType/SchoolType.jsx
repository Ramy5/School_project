import React, { useEffect, useState } from "react";
import School_1 from "../../assets/schoolType/home1.jpg";
import School_2 from "../../assets/schoolType/section4-2.jpg";
import School_3 from "../../assets/schoolType/section4-3.jpg";
import School_4 from "../../assets/schoolType/section4-4.jpg";

const SchoolType = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SchoolTypeData = [
    {
      index: 1,
      image: School_1,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
    },
    {
      index: 2,
      image: School_2,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
    },
    {
      index: 3,
      image: School_3,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
    },
    {
      index: 4,
      image: School_4,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
    },
  ];

  return (
    <div className="school_type">
      {SchoolTypeData &&
        SchoolTypeData.map((item) => {
          return (
            <div
              key={item.index}
              className={`${
                item.index == 2 || item.index == 3
                  ? "flex-row-reverse"
                  : "flex-row"
              } flex items-center h-[460px] overflow-hidden relative`}
            >
              <div className="w-1/2 overflow-hidden relative">
                <div
                  className={`img_${item.index} !transition-all !duration-300 school_type_img ${
                    scrollPosition > 3800 && (item.index == 1 || item.index == 4)
                      ? "school_img_animation_left"
                      : scrollPosition > 3800 && (item.index == 2 || item.index == 3)
                      ? "school_img_animation_right"
                      : ""
                  }`}
                ></div>
                <div
                  className={`imgClip-${item.index} absolute bg-white`}
                ></div>
              </div>

              <div className="w-1/2 relative z-50 px-[3rem]">
                <div
                  className={`${
                    item.index == 1 || item.index == 4
                      ? "float-end"
                      : "float-start ps-5"
                  } w-9/12`}
                >
                  <span className="text-lg text-mainColor">
                    {item.schoolName}
                  </span>
                  <h2 className="text-3xl font-semibold text-mainColor">
                    {item.schoolType}
                  </h2>
                  <p
                    className="text-xl text-[#244b5a] my-8"
                    style={{ lineHeight: "1.8" }}
                  >
                    {item.disc}
                  </p>
                  <button className="mt-4 button">READ MORE </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SchoolType;

// <img
// src={item.image}
// alt="school"
// class="w-full object-cover h-[350px] bg"
// style={{ clipPath: `${item.style}` }}
// />
