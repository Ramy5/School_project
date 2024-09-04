import React, { Fragment, useEffect, useState } from "react";
import { LandingPage } from "../components";
import Landing_bg_4 from "../assets/landingPage/landing_bg_4.png";
import { Form, Formik } from "formik";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaMobileScreenButton,
  FaRegCalendarDays,
  FaTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  const initialValues = {
    first_Name: "",
    last_Name: "",
    email: "",
    phone: "",
    years_experience: "",
    highest_level_education: "",
    tellUs_little_yourself: "",
  };

  const darkMapStyle = [
    {
      elementType: "geometry",
      stylers: [{ color: "#212121" }],
    },
    // Add all other elements from your style here...
  ];

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const [position, setPosition] = useState([51.505, -0.09]);
  //   const position = [51.505, -0.09];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      },
      () => {
        // alert("Could not get your location");
      }
    );
  }, []);
  return (
    <Fragment>
      <LandingPage title="Contact Us" image={Landing_bg_4} />

      <div className="mx-4 md:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">
            If you have a complaint or a comment feel free to fill in the form
          </h2>
        </div>

        <div className="mt-12 mb-20">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values }) => {
              return (
                <Form className="bg-[#f1f1f1] py-10 p-8 sm:px-12 md:px-16 lg:px-20 rounded-3xl relative z-50 flex flex-col lg:flex-row justify-between gap-8">
                  <div className=" w-full ">
                    <div className="relative mb-8 group">
                      <input
                        type="text"
                        className="w-full py-2 text-xl bg-transparent border-b border-[#01010133] focus:outline-none"
                        name="first_Name"
                        id="first_Name"
                        required
                      />
                      <label
                        htmlFor="first_Name"
                        className="absolute top-0 left-0 block mt-2 text-xl capitalize transition-all duration-500 text-[#3C3B3B] group-focus-within:-translate-y-8"
                      >
                        First Name
                      </label>
                    </div>

                    <div className="relative mb-12 group">
                      <input
                        type="text"
                        className="w-full py-2 text-xl bg-transparent border-b border-[#01010133] focus:outline-none"
                        name="last_Name"
                        id="last_Name"
                        required
                      />
                      <label
                        htmlFor="last_Name"
                        className="absolute top-0 left-0 block mt-2 text-xl capitalize transition-all duration-500 text-[#3C3B3B] group-focus-within:-translate-y-8"
                      >
                        Last Name
                      </label>
                    </div>

                    <div className="relative mb-8 group">
                      <input
                        type="email"
                        className="w-full py-2 text-xl bg-transparent border-b border-[#01010133] focus:outline-none"
                        name="email"
                        id="email"
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute top-0 left-0 block mt-2 text-xl capitalize transition-all duration-500 text-[#3C3B3B] group-focus-within:-translate-y-8"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative mt-12 mb-4 group">
                      <textarea
                        type="text"
                        className="w-full py-2 text-xl bg-transparent border-b border-[#01010133] focus:outline-none"
                        name="tellUs_little_yourself"
                        id="tellUs_little_yourself"
                        required
                      />
                      <label
                        htmlFor="tellUs_little_yourself"
                        className="absolute top-0 left-0 block mt-2 text-xl capitalize transition-all duration-500 text-[#3C3B3B] group-focus-within:-translate-y-8"
                      >
                        Enter text here
                      </label>
                    </div>

                    <button
                      className={`w-full bg-mainColor rounded-lg mt-8 m-auto py-4 text-white`}
                    >
                      <p>Submit</p>
                    </button>
                  </div>
                  <div className="w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d192683.8788956297!2d28.686875!3d41.010254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa0905d2c80dd%3A0x47a1b38761cf57ee!2sElite%20International%20Academy!5e0!3m2!1sen!2sus!4v1725484759244!5m2!1sen!2sus"
                      height="450"
                      style={{ width: "100%" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mb-48 rounded-2xl">
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
                <p className="font-semibold text-lg">
                  {" "}
                  info@eliteacademy.school
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
