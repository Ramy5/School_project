import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ApplicationForm,
  Campuses,
  EducationalCurriculum,
  Fingerprint,
  GeneralManager,
  LandingPage,
  SchoolType,
} from "./components";
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
                <SchoolType />
                <GeneralManager />
                <Graduates />
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
