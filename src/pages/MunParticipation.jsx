import React, { useRef } from "react";
import Landing_bg_1 from "../assets/landingPage/landing_bg_1.png";
import { LandingPage } from "../components";

const MunParticipation = () => {
  return (
    <div>
      <LandingPage title="MUN participation" image={Landing_bg_1} />

      <div className="mx-6 md:mx-12 lg:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">MUN participation</h2>

          <div className="mt-12 mb-52">
            <div className="grid md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-5">
              <p
                className="text-xl mb-4 text-[#0009]"
                style={{ lineHeight: "1.8" }}
              >
                Elite Academy's MUN was a blend of new friendships. Here,
                students find themselves immersed in a dynamic environment,
                engage in lively debates, and inspiring moments with an
                escalating atmosphere.
              </p>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/zVyor810KYA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MunParticipation;
