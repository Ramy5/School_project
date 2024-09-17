// import React, { useEffect, useState, useRef, Fragment } from "react";
// import Campuses_1 from "../../assets/campuses/campuses_1.png";
// import Campuses_2 from "../../assets/campuses/campuses_2.png";
// import Campuses_3 from "../../assets/campuses/campuses_3.png";
// import Campuses_4 from "../../assets/campuses/campuses_4.png";
// import "aos/dist/aos.css";
// import { useParallax } from "react-scroll-parallax";

// const Campuses = () => {
//   const [scrollY, setScrollY] = useState();
//   const [scrollTimeout, setScrollTimeout] = useState(null);
//   const secondSectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//       const timeout = setTimeout(() => {
//         setScrollY(window.scrollY);
//       }, 8);
//       setScrollTimeout(timeout);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//     };
//   }, [scrollTimeout]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setScrollY(window.scrollY);
//         }
//       },
//       {
//         root: null,
//         threshold: 0.1,
//       }
//     );

//     if (secondSectionRef.current) {
//       observer.observe(secondSectionRef.current);
//     }

//     return () => {
//       if (secondSectionRef.current) {
//         observer.unobserve(secondSectionRef.current);
//       }
//     };
//   }, []);

//   const clipScroll = (scrollY - 500) * 3;

//   const campusesData = [
//     {
//       index: 1,
//       image: Campuses_1,
//       title: "Elite Academy",
//       desc: "For KG stage",
//     },
//     {
//       index: 2,
//       image: Campuses_2,
//       title: "Elite Academy",
//       desc: "Elementary School",
//     },
//     {
//       index: 2,
//       image: Campuses_3,
//       title: "Elite Academy",
//       desc: "⁠Middle School",
//     },
//     {
//       index: 3,
//       image: Campuses_4,
//       title: "Elite Academy",
//       desc: "High School",
//     },
//   ];

//   const text = "EliteSchool•    ";

//   const parallax = useParallax({
//     rotate: [0, 360],
//   });

//   return (
//     <div ref={secondSectionRef} className="h-[110vh]">
//       <div className="relative w-full h-full">
//         <div
//           className={`${
//             clipScroll >= 450 && "hidden"
//           } absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 spinner`}
//           ref={parallax.ref}
//         >
//           {text.split("").map((char, index) => (
//             <span
//               key={index}
//               className="absolute text-[#d79a29] font-semibold text-4xl"
//               style={{
//                 transform: `rotate(${
//                   index * (400 / text.length)
//                 }deg) translate(100px) rotate(-${
//                   index * (360 / text.length)
//                 }deg)`,
//               }}
//             >
//               {char}
//             </span>
//           ))}
//         </div>
//         <div
//           className="h-full campuses_image"
//           style={{
//             clipPath: `circle(${clipScroll}px at center)`,
//           }}
//         >
//           {clipScroll >= 230 && (
//             <div className="flex flex-col md:flex-row w-full h-full">
//               {campusesData &&
//                 campusesData.map((item, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className={`camp-${index} relative h-1/4 md:h-full cursor-pointer campuse_animation !duration-500 !transition-all w-full md:w-1/4 md:hover:w-[30%]`}
//                     >
//                       <img
//                         src={item.image}
//                         alt={`Image ${index + 1}`}
//                         className="h-full w-full bg-cover bg-center object-cover"

//                       />
//                       <div className="absolute w-full text-center text-white -translate-y-1/2 top-1/2 md:top-3/4 left-1/4 md:left-1/2 md:-translate-x-1/2">
//                         <h2 className="text-3xl font-semibold">{item.title}</h2>
//                         <p className="my-3 text-2xl"> {item.desc} </p>
//                         <span className="text-lg font-semibold">
//                           {" "}
//                           {item.branch}{" "}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Campuses;

// import React, { useEffect, useState } from "react";
// import Aos from "aos";

// const Campuses = ({ data }) => {
//   console.log("🚀 ~ Campuses ~ data:", data);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     Aos.init({
//       duration: 500,
//     });
//   }, []);

//   const CampusesItem_0 = {
//     image: data && data.items[0].value,
//     title: data && data.items[0].info[0].value,
//     desc: data && data.items[0].info[1].value,
//   };

//   const CampusesItem_1 = {
//     image: data && data.items[1].value,
//     title: data && data.items[1].info[0].value,
//     desc: data && data.items[1].info[1].value,
//   };

//   const CampusesItem_2 = {
//     image: data && data.items[2].value,
//     title: data && data.items[2].info[0].value,
//     desc: data && data.items[2].info[1].value,
//   };

//   const CampusesItem_3 = {
//     image: data && data.items[3].value,
//     title: data && data.items[3].info[0].value,
//     desc: data && data.items[3].info[1].value,
//   };

//   useEffect(() => {
//     Aos.init({ duration: 1000 });

//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className="h-full overflow-hidden grid grid-cols-1 md:grid-cols-2"
//       id="campus-section"
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 h-1/2">
//         <div
//           data-aos-delay={0}
//           data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
//           className={`relative md:h-full cursor-pointer !duration-500 !transition-all w-full`}
//         >
//           <img
//             src={`https://elite.tasweka.com/storage/image/hero/${CampusesItem_0.image}`}
//             alt="Campuses_1"
//             className="h-full w-full bg-cover bg-center duration-300 transform md:hover:scale-105"
//           />
//           <div className="absolute w-full text-center text-white -translate-y-1/2 top-[80%] left-1/2 -translate-x-1/2">
//             <h2 className="text-3xl font-semibold">{CampusesItem_0.title}</h2>
//             <p className="my-3 text-2xl">{CampusesItem_0.desc}</p>
//           </div>
//         </div>
//         <div
//           data-aos-delay={200}
//           data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
//           className={`relative md:h-full cursor-pointer !duration-500 !transition-all w-full`}
//         >
//           <img
//             src={`https://elite.tasweka.com/storage/image/hero/${CampusesItem_1.image}`}
//             alt="Campuses_1"
//             className="h-full w-full bg-cover bg-center duration-300 transform md:hover:scale-105"
//           />
//           <div className="absolute w-full text-center text-white -translate-y-1/2 top-[80%] left-1/2 -translate-x-1/2">
//             <h2 className="text-3xl font-semibold">{CampusesItem_1.title}</h2>
//             <p className="my-3 text-2xl">{CampusesItem_1.desc}</p>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 h-1/2">
//         <div
//           data-aos-delay={400}
//           data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
//           className={`relative md:h-full cursor-pointer !duration-500 !transition-all w-full`}
//         >
//           <img
//             src={`https://elite.tasweka.com/storage/image/hero/${CampusesItem_2.image}`}
//             alt="Campuses_1"
//             className="h-full w-full bg-cover bg-center duration-300 transform md:hover:scale-105"
//           />
//           <div className="absolute w-full text-center text-white -translate-y-1/2 top-[80%] left-1/2 -translate-x-1/2">
//             <h2 className="text-3xl font-semibold">{CampusesItem_2.title}</h2>
//             <p className="my-3 text-2xl">{CampusesItem_2.desc}</p>
//           </div>
//         </div>
//         <div
//           data-aos-delay={600}
//           data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
//           className={`relative md:h-full cursor-pointer !duration-500 !transition-all w-full`}
//         >
//           <img
//             src={`https://elite.tasweka.com/storage/image/hero/${CampusesItem_3.image}`}
//             alt="Campuses_1"
//             className="h-full w-full bg-cover bg-center duration-300 transform md:hover:scale-105"
//           />
//           <div className="absolute w-full text-center text-white -translate-y-1/2 top-[80%] left-1/2 -translate-x-1/2">
//             <h2 className="text-3xl font-semibold">{CampusesItem_3.title}</h2>
//             <p className="my-3 text-2xl">{CampusesItem_3.desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Campuses;

import { useEffect, useState } from "react";
import Aos from "aos";

const Campuses = ({ data }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    Aos.init({ duration: 500 });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-full overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      id="campus-section"
    >
      {data.items.slice(0, 4).map((item, index) => (
        <div
          key={index}
          className="relative md:h-full cursor-pointer !duration-500 !transition-all w-full"
          data-aos-delay={index * 150}
          data-aos={!isSmallScreen ? "fade-up" : "fade-right"}
        >
          <img
            src={`https://elite.tasweka.com/storage/image/hero/${item.value}`}
            alt={`Campuses_${index + 1}`}
            className="h-full w-full bg-cover bg-center duration-300 transform md:hover:scale-105"
          />
          <div className="absolute w-full text-center text-white -translate-y-1/2 top-[80%] left-1/2 -translate-x-1/2">
            <h2 className="text-3xl font-semibold">{item.info[0].value}</h2>
            <p className="my-3 text-2xl">{item.info[1].value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campuses;
