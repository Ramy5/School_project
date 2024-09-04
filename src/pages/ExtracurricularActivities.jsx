import React, { Fragment } from "react";
import { LandingPage } from "../components";
import Landing_bg_4 from "../assets/landingPage/landing_bg_4.png";
import Extracurricular_1 from "../assets/Extracurricular/Extracurricular_1.webp";

const ExtracurricularActivities = () => {
  return (
    <Fragment>
      <LandingPage title="Extracurricular Activities" image={Landing_bg_4} />
      <div className="mx-8 md:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">Extracurriculars</h2>
          <p className="text-xl mb-4 text-[#0009]">
            At Elite, we take immense pride in offering an extensive range of
            clubs designed to cater to the diverse interests of our high school
            students. These clubs, all led by experienced and enthusiastic
            educators, serve as a dynamic platform for students to not only
            explore their passions but also to demonstrate their mastery of
            critical thinking and research skills. Our commitment to fostering a
            holistic educational experience is reflected in these clubs, where
            students can build relationships, collaborate effectively, and
            nurture leadership qualities, all while engaging in projects that
            both challenge and captivate them. These clubs not only provide an
            academic framework for growth but also ensure that students remain
            connected to the school community through meaningful and enjoyable
            endeavors.
          </p>
          <p className="text-xl mb-4 text-[#0009]">
            Complementing our club initiatives, we offer an exciting array of
            extracurricular activities that aim to enrich our students’ learning
            journey beyond the traditional classroom setting. From immersive
            trips to historical sites and universities to memorable overnight
            stays within the school premises, these activities offer students an
            unforgettable blend of education and enjoyment. Beyond the
            educational aspect, these activities also play a crucial role in
            strengthening the bond between students and their teachers,
            fostering an environment of trust and camaraderie. Through our
            comprehensive range of clubs and extracurricular experiences, we are
            dedicated to providing students with opportunities that not only
            enhance their education but also contribute to their personal and
            social development.
          </p>
        </div>

        <div className="mt-12 mb-48">
          <h2 className="font-semibold text-2xl mb-4">EDUCATIONAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
            <p className="text-xl mb-4 text-[#0009] col-span-6" style={{lineHeight: 1.8}}>
              Our school provides an invaluable service of career path counsel
              to help students prepare for their future. We have started to
              conduct college and university research and application workshops,
              as well as a presentation to parents about it under the
              supervision of our career path committee. We do believe that a
              university guide and research workshops support students and
              parents throughout the college selection process.
            </p>
            <div className="col-span-4 flex justify-end">
              <img src={Extracurricular_1} alt="Extracurricular" className="w-full"/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExtracurricularActivities;
