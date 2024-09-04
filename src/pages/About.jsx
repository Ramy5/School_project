import React, { Fragment } from "react";
import Recipe_img from "../assets/AboutUs/WhatsApp Image 2024-09-02 at 17.32.44_e3d5262f.jpg";
import { LandingPage } from "../components";
import Landing_bg_4 from "../assets/landingPage/landing_bg_4.png";

const About = () => {
  return (
    <Fragment>
      <LandingPage title="About Us" image={Landing_bg_4} />
      <div className="mx-8 md:mx-20 text-center sm:text-start">
        <div className="my-16">
          <h2 className="font-semibold text-2xl mb-4">
            Brief History of Elite Academy
          </h2>
          <p className="text-xl mb-4 text-[#0009]">
            Established in 2018, Elite welcomes International students from
            Kindergarten to Grade 12, providing an enriching educational
            journey. Our state-of-the-art campus offers indoor/outdoor sports
            facilities, a gymnasium, basketball court, ice skating rink, 3D
            Cinema, half-Olympic sized swimming pool, cafeteria,
            STEM/Robotics/Science laboratories, prayer rooms, special music &
            arts hall, and an amphitheater for theatrical events.
          </p>
          <p className="text-xl mb-4 text-[#0009]">
            At Elite, we implement the American curriculum with Cognia
            accreditation, and we are authorized by the Turkish Ministry of
            Education. Our holistic approach to education ensures a balance of
            academics, self-development, and life preparation, equipping our
            students for success in college and beyond. Join us at Elite
            International Academy and unlock your full potential!
          </p>
        </div>

        <div className="my-12">
          <h2 className="font-semibold text-2xl mb-4">Our Recipe</h2>
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20">
            <p className="text-xl mb-4 text-[#0009]">
              At Elite International Academy, our philosophy of education is
              akin to lighting a fire rather than simply filling a bucket. We
              strive to ignite a genuine love for learning in our students,
              fostering a passion that drives them to explore knowledge as an
              intrinsic pursuit. Our emphasis lies in teaching students how to
              ask the right questions, igniting their curiosity, and fueling
              their desire to seek answers. With this approach, we empower our
              students to become lifelong learners and critical thinkers, ready
              to embrace a future filled with endless possibilities.
            </p>
            <div>
              <img src={Recipe_img} alt="Recipe" />
            </div>
          </div>
        </div>

        <div className="my-12">
          <h2 className="font-semibold text-2xl mb-4">OUR DIRECTION</h2>
          <p className="text-xl mb-4 text-[#0009]">
            At Elite, we wholeheartedly believe that each of our students is a
            unique and distinct story waiting to be unfolded. Our approach to
            education diverges from producing standardized students; instead, we
            celebrate individuality. We foster a culture that encourages
            risk-taking, critical thinking, and exploration as vital paths to
            developing their skills and knowledge. Our dedicated teachers work
            tirelessly to create a safe and nurturing learning environment that
            inspires curiosity and sparks the joy of discovery. Together, we
            embrace the diversity within our student body, cultivating an
            atmosphere where every child’s strengths and passions are nurtured,
            empowering them to realize their full potential.
          </p>
        </div>

        <div className="my-12">
          <h2 className="font-semibold text-2xl mb-4">We Have a Dream</h2>
          <h2 className="font-semibold text-2xl mb-4">OUR PASSION</h2>
          <p className="text-xl mb-4 text-[#0009]">
            At our school, diversity is valued, and uniqueness is celebrated. We
            employ interactive learning strategies with a child-centered focus.
            Our teachers monitor progress, parents actively engage, and the
            community is involved. Education extends beyond classrooms,
            fostering continuous learning in every space. Our school is a haven
            of creativity, nurturing each child’s potential. Together, we dream
            of a brighter future, where learning is embraced with passion and
            joy.
          </p>
        </div>

        <div className="mt-12 mb-48">
          <h2 className="font-semibold text-2xl mb-4">OUR MISSION</h2>
          <p className="text-xl mb-4 text-[#0009]">
            At Elite Academy, our mission is to be the guiding support in your
            child’s lifelong discovery journey, exploring their destinations,
            consolidating key skills and traits, and mastering their set of
            “languages.” We believe that with the right path trodden, our kids’
            dreams will come true, leading to absolute happiness and
            fulfillment. To promote innovative solutions , inspire actions that
            create a positive, sustainable future for children. While children
            need stimulating learning environments that provide the knowledge
            and skills, they need to tackle the challenges of this century.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
