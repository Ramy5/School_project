import React, { useRef, useState } from "react";
import Landing_bg_4 from "../assets/landingPage/landing_bg_4.png";
import { LandingPage } from "../components";
import EliteStudio_1 from "../assets/EliteStudio/Capture-3.png";
import YouTube_1 from "../assets/EliteStudio/maxresdefault.jpg";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLocationDot, FaMobileScreenButton, FaRegCalendarDays } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const EliteStudio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const youtubeVideo = [
    "https://www.youtube.com/embed/ClLCMxWnFPg?start=2",
    "https://www.youtube.com/embed/F9Hza8P5pus?start=1",
    "https://www.youtube.com/embed/Rk5KwbCFNj0?start=3",
    "https://www.youtube.com/embed/IiLTm4SLrBs",
  ];

  const [selectedVideo, setSelectedVideo] = useState(youtubeVideo[0]);

  const youtubeText = [
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
    {
      image: YouTube_1,
      text: "الذكاء الاصطناعي و تأثيره على مستقبل الطلاب ( الجزء الثاني )/ Podcast Turkuaz",
      time: "3:40",
    },
  ];

  const handleClick = (index) => {
    setSelectedVideo(youtubeVideo[index]);
    setActiveIndex(index);
  };
  return (
    <div>
      <LandingPage title="Elite Studio" image={Landing_bg_4} />

      <div className="mb-16 py-10 p-8 sm:px-12 md:px-16 lg:px-20 rounded-3xl relative z-50 flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full">
          <img src={EliteStudio_1} alt="Elite Studio" className="h-full" />
        </div>
        <div className=" w-full">
          <h2 className="font-semibold text-3xl mb-5">Podcast Turkuaz</h2>
          <p
            className="text-xl mb-2 text-[#0009]"
            style={{ lineHeight: "1.8" }}
          >
            Turquoise refers to the precious turquoise gemstone, also known as
            the Turkish stone.
          </p>
          <p
            className="text-xl mb-2 text-[#0009]"
            style={{ lineHeight: "1.8" }}
          >
            We are delighted to come to you weekly from the Elite Studio,
            bringing you a wealth of meaningful programs and distinguished
            personalities.
          </p>
          <p
            className="text-xl mb-4 text-[#0009]"
            style={{ lineHeight: "1.8" }}
          >
            Join us as we engage in discussions on topics that matter to us all:
            educational, psychological, scientific, cultural, and more.
          </p>
          <button className="bg-mainColor px-4 !py-3  rounded-lg text-lg font-medium text-white btn">
            <a
              href="https://www.youtube.com/@PodcastTurkuaz"
              target="_blank"
              className="px-4 !py-3 "
            >
              Visit Our Youtube
            </a>
          </button>
        </div>
      </div>

      <div className="p-8 sm:px-12 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-10 mb-16 h-full lg:h-[500px] gap-y-8">
        <div className="col-span-4 px-0 md:px-8 overflow-y-scroll h-[400px]">
          <div className="flex justify-between border-b pb-4">
            <h2 className="font-semibold text-lg">Playlist</h2>
            <p>9 Videos</p>
          </div>
          <ul className="flex flex-col gap-2 pt-4">
            {youtubeText &&
              youtubeText.map((item, index) => (
                <li
                  // className="flex justify-between gap-3 items-center"
                  className={`flex justify-between gap-3 items-center cursor-pointer px-3 rounded-md py-4 ${
                    activeIndex === index ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div>
                    <img
                      src={item.image}
                      alt="YouTube_1"
                      className="w-28 h-12 rounded-md"
                    />
                  </div>
                  <div className="overflow-hidden text-ellipsis max-w-full pe-4 ">
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                      {item.text}
                    </p>
                  </div>
                  <p>{item.time}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-6 flex justify-between px-2 h-[400px]">
          <iframe
            width="100%"
            height="315"
            className="rounded-md h-full"
            src={selectedVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mb-48 rounded-2xl p-8 sm:px-12 md:px-16 lg:px-20">
        <div className="bg-mainColor text-white text-center font-semibold rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-tl-2xl lg:rounded-bl-2xl px-8 py-6">
          <h2 className="font-semibold text-xl">
            Give Your Child A Head Start By
          </h2>
          <h2 className="my-5 font-semibold text-xl">Enrolling In Elite</h2>
          <p className="font-semibold text-xl">Join the Elite Family Now!</p>

          <div className="flex items-center justify-center gap-4 pt-12 mt-2">
            <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
              <FaFacebookF
                size={26}
                className="transition-transform transform cursor-pointer group-hover:-translate-y-12"
              />
              <FaFacebookF
                size={26}
                className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
              <FaTwitter
                size={26}
                className="transition-transform transform cursor-pointer group-hover:-translate-y-12"
              />
              <FaTwitter
                size={26}
                className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
              <FaInstagram
                size={26}
                className="transition-transform transform cursor-pointer group-hover:-translate-y-12"
              />
              <FaInstagram
                size={26}
                className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
              <TfiYoutube
                size={26}
                className="transition-transform transform cursor-pointer group-hover:-translate-y-12"
              />
              <TfiYoutube
                size={26}
                className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="relative group bg-[#00A6C5] p-1 rounded-sm">
              <FaLinkedin
                size={26}
                className="transition-transform transform cursor-pointer group-hover:-translate-y-12"
              />
              <FaLinkedin
                size={26}
                className="cursor-pointer text-[#D69929] absolute top-1 left-1 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
        <div className="py-6 px-10 bg-[#f1f1f1] rounded-bl-2xl lg:rounded-bl-none rounded-br-2xl lg:rounded-tr-2xl lg:rounded-br-2xl">
          <div className="w-fit m-auto">
            <div className="flex items-center gap-2 mb-5">
              <FaLocationDot size={26} />
              <p className="font-semibold text-lg">Namık Kemal, Haramidere</p>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <FaMobileScreenButton size={25} />
              <p className="font-semibold text-lg">+90 544 447 30 30</p>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <FaRegCalendarDays size={26} />
              <p className="font-semibold text-lg">
                {" "}
                Mon – Fri / 09:00 – 16:00
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail size={27} />
              <p className="font-semibold text-lg"> info@eliteacademy.school</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteStudio;
