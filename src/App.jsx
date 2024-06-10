import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Accreditations,
  Activities,
  ApplicationForm,
  Campuses,
  EducationalCurriculum,
  Fingerprint,
  GeneralManager,
  KinderGarten,
  LandingPage,
  SchoolType,
} from "./components";
import { Home } from "./pages";
import { Campuses, EducationalCurriculum, Fingerprint, Header, LandingPage, Nav, News } from "./components";
import { Fragment } from "react";
import { About } from "./pages";
import { ParallaxProvider } from "react-scroll-parallax";
import Graduates from "./components/Home/Graduates/Graduates";

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
                <ApplicationForm />
                <Fingerprint />
                <EducationalCurriculum />
                <Activities />
                <SchoolType />
                <GeneralManager />
                <Graduates />
                <KinderGarten />
                <Accreditations />
              </Fragment>
            }
          />
          <Route
            path="/about"
            element={
              <Fragment>
                <LandingPage />
                <About />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <LandingPage />
              <Campuses />
              <Fingerprint />
              <EducationalCurriculum />
              <SchoolType />
              <News />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
