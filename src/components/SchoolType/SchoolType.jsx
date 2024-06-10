import React, { useEffect, useState } from "react";
import School_1 from "../../assets/schoolType/home1.jpg";
import School_2 from "../../assets/schoolType/section4-2.jpg";
import School_3 from "../../assets/schoolType/section4-3.jpg";
import School_4 from "../../assets/schoolType/section4-4.jpg";

const SchoolType = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("🚀 ~ SchoolType ~ scrollPosition:", scrollPosition);

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
      class: "img_1",
      //   style:
      //     "polygon(50% 0%, 100% 0, 91% 41%, 88% 68%, 86% 100%, 100% 100%, 0 100%, 0 65%, 0 35%, 0 0)",
    },
    {
      index: 2,
      image: School_2,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
      class: "img_2",

      //   style:
      //     "polygon(50% 0%, 100% 0, 100% 35%, 100% 35%, 100% 100%, 50% 100%, 0 100%, 5% 66%, 5% 40%, 0 0)",
    },
    {
      index: 3,
      image: School_3,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
      class: "img_3",

      //   style:
      //     "polygon(50% 0%, 100% 0, 100% 35%, 100% 35%, 100% 100%, 50% 100%, 0 100%, 5% 66%, 5% 40%, 0 0)",
    },
    {
      index: 4,
      image: School_4,
      schoolName: "APPLIED SCHOOL",
      schoolType: "ALJAZARI",
      disc: "Aljazari International Schools of Science and Technology are the center of the theory's journey into practice. The curriculum is applied in all disciplines.",
      class: "img_4",

      //   style:
      //     "polygon(50% 0%, 100% 0, 96% 33%, 94% 58%, 94% 100%, 50% 100%, 0 100%, 0 71%, 0 41%, 0 0)",
    },
  ];
  return (
    <div className="school_type">
      {SchoolTypeData &&
        SchoolTypeData.map((item) => {
          console.log("🚀 ~ SchoolType ~ item:", item);
          return (
            <div
              key={item.index}
              className={`${
                item.index == 2 || item.index == 3
                  ? "flex-row-reverse"
                  : "flex-row"
              } flex items-center h-[460px] overflow-hidden relative`}
            >
              <div className="w-1/2 overflow-hidden">
                <div
                  className={`${item.class} school_type_img ${
                    scrollPosition > 2200
                      ? "show"
                      : item.index == 2 || item.index == 3
                      ? "hide_right"
                      : "hide_left"
                  }`}
                ></div>
              </div>

              <div className="w-1/2 relative z-50 ">
                <div
                  className={`${
                    item.index == 1 || item.index == 4
                      ? "float-end"
                      : "float-start ps-5"
                  } w-9/12`}
                >
                  <span className="text-lg text-[#8f1537]">
                    {item.schoolName}
                  </span>
                  <h2 className="text-3xl font-semibold text-[#8f1537]">
                    {item.schoolType}
                  </h2>
                  <p className="text-xl text-[#244b5a] my-8" style={{lineHeight: "1.8"}}>{item.disc}</p>
                  <button className="button mt-4">READ MORE </button>
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
