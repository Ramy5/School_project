import React, { useRef } from "react";
import Landing_bg_1 from "../assets/landingPage/landing_bg_1.png";
import { LandingPage } from "../components";

const Curriclum = () => {
  return (
    <div>
      <LandingPage title="Curriclum" image={Landing_bg_1} />

      <div className="mx-6 md:mx-12 lg:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">Curriclum</h2>

          <div className="mt-6 mb-52">
            <div className="">
              <p
                className="text-xl mb-4 text-[#0009]"
                style={{ lineHeight: "1.8" }}
              >
                Our curriculum is a comprehensive blend of both in-class and
                out-of-class experiences, embodying a transformative perspective
                on education. Rather than merely filling a bucket of knowledge,
                we believe in igniting a fire within our students, fostering a
                lifelong love for learning. While recognizing that it is
                impossible to teach everything, we empower our students to
                “learn how to learn,” equipping them with essential skills for
                self-driven exploration. Our ultimate goal is to instill a
                genuine passion for learning as an inherently enriching pursuit.
              </p>

              <p
                className="text-xl mb-4 text-[#0009]"
                style={{ lineHeight: "1.8" }}
              >
                At the core of our curriculum lies the principle of empowering
                students to take charge of their own learning journey. We
                emphasize the cultivation of critical thinking skills, guiding
                students to ask pertinent questions and feel confident in their
                pursuit of knowledge. By nurturing these “critical skills,” we
                prepare them for a lifetime of continuous learning and growth.
              </p>

              <p
                className="text-xl mb-4 text-[#0009]"
                style={{ lineHeight: "1.8" }}
              >
                Our learning environment is carefully crafted to be engaging,
                challenging, inspiring, and nurturing. Through thoughtfully
                designed experiences, we promote the development of a strong
                academic foundation and cultivate positive learning habits. We
                encourage students to question, explore, and identify their core
                values and passions, fostering a deep sense of curiosity and
                personal growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriclum;
