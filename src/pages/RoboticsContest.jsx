import React, { useEffect, useRef, useState } from "react";
import Landing_bg_1 from "../assets/landingPage/landing_bg_1.png";
import { LandingPage } from "../components";

const RoboticsContest = () => {
  const permalink = "C6Ww7BqtIB5";

  return (
    <div>
      <LandingPage title="Robotics contest" image={Landing_bg_1} />

      <div className="mx-6 md:mx-12 lg:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">Robotics contest</h2>

          <div className="mt-12 mb-52">
            <div className="grid md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-5">
              <p
                className="text-xl mb-4 text-[#0009]"
                style={{ lineHeight: "1.8" }}
              >
                The STEM and Robotics Department at Elite Academy fosters
                innovation and hands-on learning, where students engage in
                robotics, coding, and engineering projects. With
                state-of-the-art resources, they develop critical thinking and
                technical skills, preparing for future success in science and
                technology
              </p>

              <iframe
                width="100%"
                height="315"
                src={`https://www.instagram.com/p/${permalink}/embed`}
                title="Instagram video"
                allowFullScreen
                onScroll={true}
                className="border-none"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsContest;
