import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import shapeLeftImg from "../../assets/header/shape-left.svg";
import shapeRightImg from "../../assets/header/shape-right.svg";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const headerLeftSide = document.querySelector(".header_left-side");
      const headerRightSide = document.querySelector(".header_right-side");
      const header = document.querySelector(".header");

      if (scrollY > 70) {
        headerLeftSide.style.transform = "translateX(-100%)";
        headerRightSide.style.transform = "translateX(100%)";
      } else if (scrollY > 400) {
        header.setAttribute("style", "z-index: -1");
      } else if (scrollY <= 1) {
        headerLeftSide.style.transform = "translateX(0)";
        headerRightSide.style.transform = "translateX(0)";
      }
    });
  }, []);

  return (
    <header className="fixed top-0 z-50 grid items-center justify-center w-full grid-cols-2 header">
      {/** LEFT SIDE */}
      <div className="relative flex items-start justify-between h-full py-2 pl-24 pr-48 text-white transition-all duration-700 header_left-side">
        <img
          src={shapeLeftImg}
          alt="shape left"
          className="absolute top-0 left-0 inline-block w-full -z-10"
        />

        <div className="flex items-center gap-3">
          <div className="relative group">
            <FaFacebookF
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaFacebookF
              size={20}
              className="cursor-pointer text-[#D69929] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          <div className="relative group">
            <FaTwitter
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaTwitter
              size={20}
              className="cursor-pointer text-[#D69929] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group">
            <FaInstagram
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaInstagram
              size={20}
              className="cursor-pointer text-[#D69929] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group">
            <TfiYoutube
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <TfiYoutube
              size={20}
              className="cursor-pointer text-[#D69929] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group">
            <FaLinkedin
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaLinkedin
              size={20}
              className="cursor-pointer text-[#D69929] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>

        <p className="flex cursor-pointer items-center gap-3 border-2 border-[#3CB09D] rounded-full  px-2">
          <FaWhatsapp />
          <span>Whatsapp</span>
        </p>

        <p className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>+1234566778</span>
        </p>
      </div>

      {/** RIGHT SIDE */}
      <div className="relative flex items-start h-full py-2 pl-48 pr-24 text-white transition-all duration-700 header_right-side">
        <img
          src={shapeRightImg}
          alt="shape left"
          className="absolute top-0 left-0 inline-block w-full -z-10"
        />
        <div className="flex items-center justify-between w-full">
          <button
            type="button"
            className="bg-[#3CB] px-4 py-[2px] uppercase rounded-full font-bold text-sm hover:text-[#3CB] transition-all duration-300 hover:bg-white"
          >
            apply now
          </button>
          <IoSearch size={20} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
