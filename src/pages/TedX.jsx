import React, { useRef } from "react";
import Landing_bg_1 from "../assets/landingPage/landing_bg_1.png";
import { LandingPage } from "../components";

const TedX = () => {

  return (
    <div>
      <LandingPage title="Tedx" image={Landing_bg_1} />

      <div className="mx-6 md:mx-12 lg:mx-20">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">TEDx Show</h2>

          <div className="mt-12 mb-52">
            <div className="grid grid-cols-2 gap-x-32 gap-y-5">
              <p className="text-xl mb-4 text-[#0009]" style={{ lineHeight: '1.8' }}>
                The students' TEDx show at our school features inspiring talks
                and innovative ideas presented by our talented students. This
                event encourages creative thinking and public speaking skills,
                showcasing diverse perspectives and solutions. It reflects our
                commitment to fostering leadership and intellectual curiosity in
                a dynamic and engaging format.
              </p>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/7y6lkTHpjGU"
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

export default TedX;
