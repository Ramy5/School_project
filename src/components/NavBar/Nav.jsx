// import navShapeRight from "../../assets/nav/shape-right.svg";
// import navShapeLeft from "../../assets/nav/shape-left.svg";
// import navLogo from "../../assets/nav/nav-logo.svg";
// import "./navBarIcon.css";
// import { useEffect } from "react";
// import { IoSearch } from "react-icons/io5";
// import shapeLeftImg from "../../assets/header/shape-left.png";
// import shapeRightImg from "../../assets/header/shape-right.png";
// import { HiMiniBars3 } from "react-icons/hi2";

// const Nav = ({ setDropdownNavBar }) => {
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const navLeftSide = document.querySelector(".nav_left-side");
//       const navRightSide = document.querySelector(".nav_right-side");
//       const navCenter = document.querySelector(".nav_center");
//       const nav = document.querySelector(".nav");

//       if (scrollY > 70) {
//         navLeftSide.style.transform = "translateX(-100%)";
//         navRightSide.style.transform = "translateX(100%)";
//         navCenter.style.transform = "translateY(-20rem)";
//       } else if (scrollY > 400) {
//         nav.style.position = "relative";
//         nav.style.top = "auto";
//       } else if (scrollY <= 1) {
//         navLeftSide.style.transform = "translateX(0)";
//         navRightSide.style.transform = "translateX(0)";
//         navCenter.style.transform = "translateY(0)";
//       }
//     });
//   }, []);

//   const handleOpenNavBar = () => {
//     setDropdownNavBar(true);
//   };

//   return (
//     <nav className="fixed nav top-0 lg:top-16 z-40 grid grid-cols-12 w-full">
//       {/** LEFT SIDE */}
//       <div className="relative col-span-5 h-[70px] lg:h-fit flex items-center transition-all duration-700 ease-in-out nav_left-side">
//         <img
//           src={shapeLeftImg}
//           alt="shape left"
//           className="absolute top-0 left-0 h-[70px] inline-block lg:hidden w-full -z-10"
//         />

//         <div className="flex gap-6 ps-3 md:ps-12 lg:ps-16 mb-1 lg:mb-0 sideBar_left_side">
//           <button className="bg-transparent lg:bg-mainColor py-0 lg:py-2 px-0 lg:px-4 text-white rounded-md font-medium sm:font-semibold text-base">
//             APPLY NOW
//           </button>
//         </div>
//       </div>

//       {/** CENTER */}
//       <div className="m-auto col-span-2 transition-all duration-700 -translate-y-10 nav_center mt-12 lg:mt-0">
//         <img
//           src={navLogo}
//           alt="nav logo"
//           className="w-32 lg:w-36 h-32 lg:h-36 -mt-8"
//         />
//       </div>

//       {/** RIGHT SIDE */}
//       <div className="relative col-span-5 transition-all h-[60px] lg:h-fit flex items-center duration-700 nav_right-side">
//         <img
//           src={shapeRightImg}
//           alt="shape left"
//           className="absolute top-0 left-0 h-[60px] inline-block lg:hidden w-full -z-10 "
//         />

//         <div className="flex items-center justify-end w-full gap-6 lg:gap-10 pe-3 sm:pe-12 lg:pe-16 sideBar_right_side">
//           <p className="mt-1 text-lg font-semibold text-white cursor-pointer hidden md:block">
//             About Us
//           </p>

//           <IoSearch size={28} fill="white" />

//           <div>
//             <button
//               className="cursor-pointer"
//               onClick={handleOpenNavBar}
//             >
//               <HiMiniBars3 size={40} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// // <button className="text-white font-semibold text-base">EN</button>


import { useEffect } from "react";
import navShapeRight from "../../assets/nav/shape-right.svg";
import navShapeLeft from "../../assets/nav/shape-left.svg";
import navLogo from "../../assets/nav/nav-logo.svg";
import "./navBarIcon.css";
import { IoSearch } from "react-icons/io5";
import shapeLeftImg from "../../assets/header/shape-left.png";
import shapeRightImg from "../../assets/header/shape-right.png";
import { HiMiniBars3 } from "react-icons/hi2";
import throttle from "lodash/throttle";

const Nav = ({ setDropdownNavBar }) => {
  useEffect(() => {
    const handleScroll = throttle(() => {
      const navLeftSide = document.querySelector(".nav_left-side");
      const navRightSide = document.querySelector(".nav_right-side");
      const navCenter = document.querySelector(".nav_center");
      const nav = document.querySelector(".nav");

      const scrollPosition = window.scrollY;

      if (scrollPosition > 70) {
        navLeftSide.style.transform = "translateX(-100%)";
        navRightSide.style.transform = "translateX(100%)";
        navCenter.style.transform = "translateY(-20rem)";
      } else if (scrollPosition > 400) {
        nav.style.position = "relative";
        nav.style.top = "auto";
      } else if (scrollPosition <= 1) {
        navLeftSide.style.transform = "translateX(0)";
        navRightSide.style.transform = "translateX(0)";
        navCenter.style.transform = "translateY(0)";
      }
    }, 100); // Throttled for better performance on mobile

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavBar = () => {
    setDropdownNavBar(true);
  };

  return (
    <nav className="fixed nav top-0 lg:top-16 z-40 grid grid-cols-12 w-full">
      {/* LEFT SIDE */}
      <div className="relative col-span-5 h-[70px] lg:h-fit flex items-center transition-all duration-700 ease-in-out nav_left-side">
        <img
          src={shapeLeftImg}
          alt="shape left"
          className="absolute top-0 left-0 h-[70px] inline-block lg:hidden w-full -z-10"
        />

        <div className="flex gap-6 ps-3 md:ps-12 lg:ps-16 mb-1 lg:mb-0 sideBar_left_side">
          <button className="bg-transparent lg:bg-mainColor py-0 lg:py-2 px-0 lg:px-4 text-white rounded-md font-medium sm:font-semibold text-base">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* CENTER */}
      <div className="m-auto col-span-2 transition-all duration-700 -translate-y-10 nav_center mt-12 lg:mt-0">
        <img
          src={navLogo}
          alt="nav logo"
          className="w-32 lg:w-36 h-32 lg:h-36 -mt-8"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="relative col-span-5 transition-all h-[60px] lg:h-fit flex items-center duration-700 nav_right-side">
        <img
          src={shapeRightImg}
          alt="shape left"
          className="absolute top-0 left-0 h-[60px] inline-block lg:hidden w-full -z-10 "
        />

        <div className="flex items-center justify-end w-full gap-6 lg:gap-10 pe-3 sm:pe-12 lg:pe-16 sideBar_right_side">
          <p className="mt-1 text-lg font-semibold text-white cursor-pointer hidden md:block">
            About Us
          </p>

          <IoSearch size={28} fill="white" />

          <div>
            <button
              className="cursor-pointer"
              onClick={handleOpenNavBar}
            >
              <HiMiniBars3 size={40} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

