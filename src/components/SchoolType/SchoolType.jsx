import React, { useEffect, useState } from "react";
import School_1 from "../../assets/schoolType/home1.jpg";
import School_2 from "../../assets/schoolType/section4-2.jpg";
import School_3 from "../../assets/schoolType/section4-3.jpg";
import School_4 from "../../assets/schoolType/section4-4.jpg";

const SchoolType = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("🚀 ~ SchoolType ~ scrollPosition:", scrollPosition)

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
      schoolName: "مدرسة الجزري",
      schoolType: "التطبيقية",
      disc: "مدارس الجزري الدولية للعلوم والتكنولوجيا هي محور رحلة النظرية إلى الممارسة. يتم تنفيذ المنهج التطبيقي في جميع التخصصات.",
      class: "img_1",
      //   style:
      //     "polygon(50% 0%, 100% 0, 91% 41%, 88% 68%, 86% 100%, 100% 100%, 0 100%, 0 65%, 0 35%, 0 0)",
    },
    {
      index: 2,
      image: School_2,
      schoolName: "مدرسة الحدائق",
      schoolType: "التقنية",
      disc: "أصبحت التكنولوجيا والمنتجات التكنولوجية، التي تؤثر على جميع مجالات الحياة اليومية تقريبًا، نقطة لا غنى عنها في حياتنا اليومية واستخدمتها بواسطة جميع الفئات العمرية.",
      class: "img_2",

      //   style:
      //     "polygon(50% 0%, 100% 0, 100% 35%, 100% 35%, 100% 100%, 50% 100%, 0 100%, 5% 66%, 5% 40%, 0 0)",
    },
    {
      index: 3,
      image: School_3,
      schoolName: "مدرسة الحاضنات",
      schoolType: "المجتمعية",
      disc: "التعليم؛ يشير إلى التحول والتطور في مجالات العاطفة والفكر والسلوك. بينما يوجه البشر حياتهم من خلال معالجة المعرفة والفضيلة، لا يمكنهم أن يكونوا مستقلين تمامًا عن ثقافة وحياة وفهم المجتمع الذي هم فيه.",
      class: "img_3",

      //   style:
      //     "polygon(50% 0%, 100% 0, 100% 35%, 100% 35%, 100% 100%, 50% 100%, 0 100%, 5% 66%, 5% 40%, 0 0)",
    },
    {
      index: 4,
      image: School_4,
      schoolName: "مدرسة صديقة",
      schoolType: "للبيئة",
      disc: "مصدر غذائنا هو جزء من الطبيعة البشرية مع التربة والهواء الذي نتنفسه والماء الذي نشربه. تتشكل قوانين الفصول والأيام والوقت والصحة التي تشكل أساس حياة الإنسان وفقًا لقوانين الكون.",
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
              } flex items-center h-[320px] overflow-hidden `}
            >
              <div className="w-1/2 overflow-hidden">
                <div className={`${item.class} school_type_img ${scrollPosition > 2200 ? "show" : item.index == 2 || item.index == 3 ? "hide_right" : "hide_left"}`} ></div>
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
                  <p className="text-xl text-[#244b5a] my-5">{item.disc}</p>
                  <button className="button">اقرأ المزيد</button>
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
