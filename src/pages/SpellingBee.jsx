import React, { useRef } from "react";
import Landing_bg_1 from "../assets/landingPage/landing_bg_1.png";
import { LandingPage } from "../components";

const SpellingBee = () => {
  return (
    <div>
      <LandingPage title="Spelling Bee" image={Landing_bg_1} />

      <div className="mx-6 md:mx-12 lg:mx-20">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">Spelling Bee</h2>

          <div className="my-16">
            <div className="grid md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-5">
              <p
                className="text-xl mb-4 text-[#0009]"
                style={{ lineHeight: "1.8" }}
              >
                Our Spelling Bee competition challenges students to showcase
                their spelling prowess and vocabulary skills in a fun,
                competitive environment. This event encourages precision and
                confidence while celebrating academic achievement. It highlights
                our dedication to enhancing language skills and fostering a love
                of learning.
              </p>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VxbaNKD3ETY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mb-48">
          <h2 className="font-semibold text-2xl mb-4">OUR MISSION</h2>
          <p className="text-xl mb-4 text-[#0009]">
            At Elite Academy, our mission is to be the guiding support in your
            child’s lifelong discovery journey, exploring their destinations,
            consolidating key skills and traits, and mastering their set of
            “languages.” We believe that with the right path trodden, our kids’
            dreams will come true, leading to absolute happiness and fulfillment.
            To promote innovative solutions , inspire actions that create a
            positive, sustainable future for children. While children need
            stimulating learning environments that provide the knowledge and
            skills, they need to tackle the challenges of this century.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SpellingBee;
