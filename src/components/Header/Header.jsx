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

const Header = () => {
  return (
    <header className="relative z-50 grid items-center justify-center w-full grid-cols-2">
      {/** LEFT SIDE */}
      <div className="relative flex items-start justify-between h-full py-2 pl-24 pr-48 text-white">
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
              className="cursor-pointer text-[#3CB09D] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          <div className="relative group">
            <FaTwitter
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaTwitter
              size={20}
              className="cursor-pointer text-[#3CB09D] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group">
            <FaInstagram
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaInstagram
              size={20}
              className="cursor-pointer text-[#3CB09D] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group">
            <TfiYoutube
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <TfiYoutube
              size={20}
              className="cursor-pointer text-[#3CB09D] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative group">
            <FaLinkedin
              size={20}
              className="transition-transform transform cursor-pointer group-hover:-translate-y-8"
            />
            <FaLinkedin
              size={20}
              className="cursor-pointer text-[#3CB09D] absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
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
      <div className="relative flex items-start h-full py-2 pl-48 pr-24 text-white">
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
