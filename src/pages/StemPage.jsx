import React, { Fragment } from "react";
import { LandingPage } from "../components";
import Landing_bg_4 from "../assets/landingPage/landing_bg_4.png";

const StemPage = () => {
  return (
    <Fragment>
      <LandingPage title="Stem Education" image={Landing_bg_4} />

      <div className="mx-8 md:mx-20 text-center sm:text-start">
        <div className="mt-16 mb-48">
          <h2 className="font-semibold text-2xl mb-4">Stem Education</h2>
          <h3 className="font-semibold text-xl mb-8">
            Nurturing Critical Thinkers and Innovators
          </h3>
          <iframe
            loading="lazy"
            className="w-full h-96 rounded-[2rem]"
            src="https://www.youtube.com/embed/q8nZVnOdh1E?start=2"
            title="George Mahfoud"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3 className="font-semibold text-xl mt-12 mb-4 ">
            The Significance of STEM Education in the 21st Century
          </h3>
          <p className="text-xl mb-4 text-[#0009]">
            Discover the profound importance of STEM (Science, Technology,
            Engineering, and Mathematics) education in equipping students with
            the skills and knowledge necessary for success in the rapidly
            evolving 21st-century landscape. STEM education fosters critical
            thinking, problem-solving, and innovation skills, playing a vital
            role in shaping future leaders and innovators.
          </p>
          <p className="text-xl mb-4 text-[#0009]">
            In an era defined by technological advancements and complex global
            challenges, STEM education serves as a beacon, empowering students
            to become active contributors and leaders in an interconnected
            society. By integrating science, technology, engineering, and
            mathematics, students develop a holistic understanding of the world
            and gain the tools to navigate its complexities.
          </p>
          <p className="text-xl mb-4 text-[#0009]">
            STEM education cultivates critical thinking, enabling students to
            analyze information, evaluate evidence, and make informed decisions.
            It nurtures problem-solving skills through hands-on projects and
            real-world scenarios, fostering resilience and the ability to tackle
            multifaceted challenges.
          </p>

          <p className="text-xl mb-4 text-[#0009]">
            Moreover, STEM education fuels innovation by inspiring creativity,
            curiosity, and exploration. Students are encouraged to push
            boundaries, question the status quo, and seek innovative solutions
            to address real-world needs.
          </p>

          <p className="text-xl mb-4 text-[#0009]">
            Join us on this transformative journey as we unlock the
            transformative power of STEM education and prepare students to
            thrive in a rapidly changing world.”
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default StemPage;
