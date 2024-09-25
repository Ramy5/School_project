import React, { Fragment, useEffect, useState } from "react";
import Recipe_img from "../assets/AboutUs/WhatsApp Image 2024-09-02 at 17.32.44_e3d5262f.jpg";
import { LandingPage } from "../components";
import Landing_bg_4 from "../assets/landingPage/landing_bg_4.png";
import Loading from "../components/Loading/Loading";
import axios from "axios";

const About = () => {
  const [dataSource, setDataSource] = useState(null);
  console.log("🚀 ~ Home ~ dataSource:", dataSource);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "https://elite.medicalvisionarabia.com/api/about-us"
        );
        setDataSource(response?.data?.data?.about);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <Loading pageNames="About" />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Fragment>
      <LandingPage title="About Us" image={Landing_bg_4} />

      <div className="mx-8 md:mx-20 text-center sm:text-start">
        <h3 className="">
          <span
            dangerouslySetInnerHTML={{ __html: dataSource.aboutInfo[0].value }}
          />
        </h3>
      </div>
    </Fragment>
  );
};

export default About;
