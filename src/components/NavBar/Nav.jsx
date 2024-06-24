import navShapeRight from "../../assets/nav/shape-right.svg";
import navShapeLeft from "../../assets/nav/shape-left.svg";
import navLogo from "../../assets/nav/nav-logo.png";
import "./navBarIcon.css";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navLeftSide = document.querySelector(".nav_left-side");
      const navRightSide = document.querySelector(".nav_right-side");
      const navCenter = document.querySelector(".nav_center");
      const nav = document.querySelector(".nav");

      if (scrollY > 70) {
        navLeftSide.style.transform = "translateX(-100%)";
        navRightSide.style.transform = "translateX(100%)";
        navCenter.style.transform = "translateY(-20rem)";
      } else if (scrollY > 400) {
        nav.style.position = "relative";
        nav.style.top = "auto";
      } else if (scrollY <= 1) {
        navLeftSide.style.transform = "translateX(0)";
        navRightSide.style.transform = "translateX(0)";
        navCenter.style.transform = "translateY(0)";
      }
    });
  }, []);

  return (
    <nav className="fixed nav top-[43px] z-40 grid grid-cols-3 w-full">
      {/** LEFT SIDE */}
      <div className="relative transition-all duration-700 ease-in-out nav_left-side">
        <img
          src={navShapeLeft}
          alt="nav shape"
          className="-mt-[5.5px] w-96 absolute top-0 left-0 inline-block -z-10"
        />

        <p className="w-full px-24 mt-1 text-2xl font-bold text-white cursor-pointer">
          Join Us
        </p>
      </div>

      {/** CENTER */}
      <div className="flex justify-center transition-all duration-700 -translate-y-10 nav_center">
        <img
          src={navLogo}
          alt="nav logo"
          className="-translate-y-4 w-36 h-36"
        />
      </div>

      {/** RIGHT SIDE */}
      <div className="relative transition-all duration-700 nav_right-side">
        <img
          src={navShapeRight}
          alt="nav shape"
          className="-mt-[5.5px] w-96 absolute top-0 right-0 inline-block -z-10"
        />

        <div className="flex items-center justify-end w-full gap-16 pr-12">
          <p className="mt-1 text-2xl font-bold text-white cursor-pointer">
            About Us
          </p>

          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
