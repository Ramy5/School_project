import React, { useState } from "react";
import { HiOutlineMinusSm } from "react-icons/hi";
import { IoRemoveOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DropDownNavBar = ({ dropdownNavBar, setDropdownNavBar }) => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isStudentLife, setIsStudentLifeOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseNavBar = () => {
    setDropdownNavBar(false);
  };

  const sideBarItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Academics",
      link: "",
      items: [
        {
          title: "Curriclum",
          link: "/curriclum",
        },
        {
          title: "Extracurricular Activities",
          link: "/extracurricular",
        },
        {
          title: "Dual Diploma",
          link: "/dual_Diploma",
        },
        {
          title: "Career Path",
          link: "/Career_Path",
        },
        {
          title: "STEM",
          link: "/stem",
        },
      ],
    },
    {
      title: "Student Life",
      link: "",
      items: [
        {
          title: "Elite Graduates",
          link: "/elite_Graduates",
        },
        {
          title: "TedX",
          link: "/TedX",
        },
        {
          title: "Spelling Bee",
          link: "/spelling_bee",
        },
        {
          title: "International Day",
          link: "/international_day",
        },
        {
          title: "Robotics",
          link: "/robotics",
        },
        {
          title: "MUN",
          link: "/MUN",
        },
        {
          title: "Community Service",
          link: "/community_service",
        },
      ],
    },
    {
      title: "Elite studio",
      link: "/elite_studio",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Admission",
      link: "",
      items: [
        {
          title: "Application Form",
          link: "/application",
        },
      ],
    },
    {
      title: "Contact Us",
      link: "/Contact_Us",
    },
  ];

  const handleNavigate = (link) => {
    if (link) {
      setDropdownNavBar(false);
      navigate(link);
    }
  };

  const getCurrentPathName = (path) => {
    const segments = path.split("/").filter(Boolean);
    const segmentsType =
      segments.length > 0
        ? `/${segments[0]}/${segments[1]}`
        : `/${segments[0]}`;

    return segmentsType;
  };

  const currentPathtName = getCurrentPathName(location.pathname);

  return (
    <div
      className={`w-full h-full navbar bg-mainColor fixed transform transition-transform duration-1000 ${
        dropdownNavBar ? "translate-y-0" : "-translate-y-full"
      }  left-0 z-50`}
    >
      <div className="flex items-center justify-end ">
        <button
          className="pt-6 pe-8 cursor-pointer"
          onClick={handleCloseNavBar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="45"
            height="45"
            color="white"
            fill="none"
          >
            <path
              d="M10.2471 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7532 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1182 4.37524 16.3302 4.25283C17.3966 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7472 7.66981C19.6248 7.88183 19.421 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6248 16.1179 19.7472 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3965 20.3626 16.3302 19.7469C16.1182 19.6246 15.9143 19.4208 15.5067 19.013L13.7534 17.2598L13.7533 17.2597C12.9272 16.4336 12.5136 16.02 12.0001 16.02C11.4867 16.02 11.073 16.4336 10.2469 17.2598L10.2469 17.2598L8.49353 19.013C8.0859 19.4208 7.88208 19.6246 7.67005 19.7469C6.60377 20.3626 5.72534 19.7516 4.98693 19.013C4.2484 18.2746 3.63744 17.3963 4.25307 16.3299C4.37549 16.1179 4.5793 15.9141 4.98693 15.5065L6.74044 13.7529C7.56681 12.9266 7.98 12.5134 7.98 11.9999C7.98 11.4864 7.5666 11.073 6.74022 10.2466L4.98685 8.49321C4.57928 8.08563 4.37548 7.88183 4.25307 7.66981C3.63741 6.60345 4.24845 5.72518 4.98693 4.98669C5.72542 4.24821 6.60369 3.63716 7.67005 4.25283C7.88207 4.37524 8.08593 4.5791 8.49352 4.98668L8.49353 4.98669L10.2471 6.7402Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul className="flex-1 mt-6 ps-5 w-full lg:w-4/5">
        {sideBarItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => {
              item.title === "Academics" && setIsAcademicsOpen(true);
              item.title === "Student Life" && setIsStudentLifeOpen(true);
              item.title === "Admission" && setIsAdmissionOpen(true);
            }}
            onMouseLeave={() => {
              item.title === "Academics" && setIsAcademicsOpen(false);
              item.title === "Student Life" && setIsStudentLifeOpen(false);
              item.title === "Admission" && setIsAdmissionOpen(false);
            }}
            className="relative py-1 group"
          >
            <div
              className={`flex items-center py-2 px-3 my-1 h-10 rounded-s-full cursor-pointer font-semibold text-3xl transition-colors text-[#ffffffb3] ${
                currentPathtName === item.link
                  ? " !text-white"
                  : ` hover:text-white`
              }`}
              onClick={() => handleNavigate(item.link)}
            >
              <HiOutlineMinusSm className="w-0 group-hover:w-16 duration-500 h-20" />
              <span className={`overflow-hidden transition-all truncate`}>
                {item.title}
              </span>
            </div>

            {item.title === "Academics" && (
              <ul
                className={`static md:absolute top-0 md:top-1/2 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 -translate-y-0 md:-translate-y-1/2 md:mt-8 transition-all duration-300 ease-in-out transform z-20 ${
                  isAcademicsOpen
                    ? "opacity-100 block"
                    : "opacity-0 hidden pointer-events-none"
                }`}
              >
                <li className="py-2 px-3 my-1 hidden md:flex items-center gap-3 h-8 rounded-s-full cursor-pointer font-medium text-2xl text-white">
                  Academics
                </li>
                {item.items.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-4 px-3 ms-8 my-2 flex items-center gap-3 h-8 rounded-s-full cursor-pointer font-medium text-2xl text-[#ffffffb3] hover:text-white"
                    onClick={() => handleNavigate(subItem.link)}
                  >
                    <span className="overflow-hidden transition-all truncate">
                      {subItem.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {item.title === "Student Life" && (
              <ul
                className={`static md:absolute top-0 md:top-1/2 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 -translate-y-0 md:-translate-y-1/2 md:mt-8 transition-all duration-300 ease-in-out transform z-20 ${
                  isStudentLife
                    ? "opacity-100 block"
                    : "opacity-0 hidden pointer-events-none"
                }`}
              >
                <li className="py-2 px-3 my-1 items-center gap-3 hidden md:flex h-8 rounded-s-full cursor-pointer font-medium text-2xl text-white">
                  Student Life
                </li>

                {item.items.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-4 px-3 ms-8 my-2 flex items-center gap-3 h-8 rounded-s-full cursor-pointer font-medium text-2xl text-[#ffffffb3] hover:text-white"
                    onClick={() => handleNavigate(subItem.link)}
                  >
                    <span className="overflow-hidden transition-all truncate">
                      {subItem.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {item.title === "Admission" && (
              <ul
                className={`static md:absolute top-0 md:top-1/2 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 -translate-y-0 md:-translate-y-1/2 md:mt-8 transition-all duration-300 ease-in-out transform z-20 ${
                  isAdmissionOpen
                    ? "opacity-100 block"
                    : "opacity-0 hidden pointer-events-none"
                }`}
              >
                <li className="py-2 px-3 my-1 hidden md:flex items-center h-8 rounded-s-full cursor-pointer font-medium text-2xl text-white">
                  Admission
                </li>

                {item.items.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-2 px-3 ms-8 my-2  flex items-center h-8 rounded-s-full cursor-pointer font-medium text-2xl text-[#ffffffb3] hover:text-white"
                    onClick={() => handleNavigate(subItem.link)}
                  >
                    <span className="overflow-hidden transition-all truncate">
                      {subItem.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownNavBar;
