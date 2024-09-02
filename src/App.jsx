import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Accreditations,
  Activities,
  ApplicationForm,
  Campuses,
  Fingerprint,
  GeneralManager,
  KinderGarten,
  SchoolType,
  EducationalCurriculum,
  Header,
  LandingPage,
  Nav,
  News,
} from "./components";
import { Home } from "./pages";
import { Fragment } from "react";
import { About } from "./pages";
import { ParallaxProvider } from "react-scroll-parallax";
import Graduates from "./components/Home/Graduates/Graduates";
import MessageSchool from "./components/MessageSchool/MessageSchool";
import OurProcess from "./components/OurProcess/OurProcess";
import EliteStudio from "./components/EliteStudio/EliteStudio";
import EliteGraduates from "./components/EliteGraduates/EliteGraduates";
import NewsAnnouncement from "./components/NewsAnnouncement/NewsAnnouncement";
import CampusLife from "./components/CampusLife/CampusLife";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import EliteGraduatesPage from "./pages/EliteGraduatesPage";
import TedX from "./pages/TedX";
import SpellingBee from "./pages/SpellingBee";
import MunParticipation from "./pages/MunParticipation";
import RoboticsContest from "./pages/RoboticsContest";
import Curriclum from "./pages/Curriclum";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <LandingPage />
                <Campuses />
                <MessageSchool />
                <OurProcess />
                <ApplicationForm />
                <SchoolType />
                <EliteStudio />
                <Activities />
                <EliteGraduates />
                <NewsAnnouncement />
                <CampusLife />
                <Accreditations />
                <Testimonials />
                <Footer />
              </Fragment>
            }
          />
          <Route
            path="/about"
            element={
              <Fragment>
                <About />
                <Footer />
              </Fragment>
            }
          />
          <Route
            path="/elite_Graduates"
            element={
              <Fragment>
                <EliteGraduatesPage />
                <Footer />
              </Fragment>
            }
          />

          <Route
            path="/TedX"
            element={
              <Fragment>
                <TedX />
                <Footer />
              </Fragment>
            }
          />

          <Route
            path="/spelling_bee"
            element={
              <Fragment>
                <SpellingBee />
                <Footer />
              </Fragment>
            }
          />

          <Route
            path="/MUN"
            element={
              <Fragment>
                <MunParticipation />
                <Footer />
              </Fragment>
            }
          />

          <Route
            path="/robotics"
            element={
              <Fragment>
                <RoboticsContest />
                <Footer />
              </Fragment>
            }
          />

          <Route
            path="/curriclum"
            element={
              <Fragment>
                <Curriclum />
                <Footer />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
