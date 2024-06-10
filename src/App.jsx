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
                <News />
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
  );
}

export default App;
