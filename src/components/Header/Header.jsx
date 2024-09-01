import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import shapeLeftImg from "../../assets/header/shape-left.png";
import shapeRightImg from "../../assets/header/shape-right.png";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

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
    <header className="fixed top-0 z-50 lg:grid items-center justify-center w-full grid-cols-2 header h-12 hidden">
      {/** LEFT SIDE */}
      <div className="relative flex items-center justify-between h-12 pl-16 pr-20 text-white transition-all duration-700 header_left-side">
        <img
          src={shapeLeftImg}
          alt="shape left"
          className="absolute top-0 left-0 h-[54px] inline-block w-full -z-10"
        />

        <div className="flex items-center gap-1">
          <IoLocationSharp size={18} />
          <p className="text-xs font-medium">
            Namık Kemal, Haramidere Yolu, 34513
          </p>
        </div>

        <p className="flex items-center gap-1">
          <FiPhone size={18} />
          <p className="text-xs font-medium ">+90 544 447 30 30</p>
        </p>
      </div>

      {/** RIGHT SIDE */}
      <div className="relative flex items-center justify-between h-12 pl-24 pr-16 text-white transition-all duration-700 header_right-side">
        <img
          src={shapeRightImg}
          alt="shape left"
          className="absolute top-0 left-0 h-12 inline-block w-full -z-10"
        />

        <div className="flex items-center gap-2">
          <MdEmail size={18} />
          <p className="text-xs font-medium ">info@eliteacademy.school</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
            <FaFacebookF
              size={16}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaFacebookF
              size={16}
              className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
            <FaTwitter
              size={16}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaTwitter
              size={16}
              className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
            <FaInstagram
              size={16}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaInstagram
              size={16}
              className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
            <TfiYoutube
              size={16}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <TfiYoutube
              size={16}
              className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
            <FaLinkedin
              size={16}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaLinkedin
              size={16}
              className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
