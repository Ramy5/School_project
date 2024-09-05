import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer/Footer";
import LoadingWrapper from "./components/Loading/LoadingWrapper";

// Lazy load the components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const EliteGraduatesPage = lazy(() => import("./pages/EliteGraduatesPage"));
const TedX = lazy(() => import("./pages/TedX"));
const SpellingBee = lazy(() => import("./pages/SpellingBee"));
const MunParticipation = lazy(() => import("./pages/MunParticipation"));
const RoboticsContest = lazy(() => import("./pages/RoboticsContest"));
const Curriclum = lazy(() => import("./pages/Curriclum"));
const ExtracurricularActivities = lazy(() =>
  import("./pages/ExtracurricularActivities")
);
const DualDiploma = lazy(() => import("./pages/DualDiploma"));
const CareerPath = lazy(() => import("./pages/CareerPath"));
const StemPage = lazy(() => import("./pages/StemPage"));
const InternationalDay = lazy(() => import("./pages/InternationalDay"));
const CommunityService = lazy(() => import("./pages/CommunityService"));
const Events = lazy(() => import("./pages/Events"));
const ApplicationFormPage = lazy(() => import("./pages/ApplicationFormPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const EliteStudioPage = lazy(() => import("./pages/EliteStudioPage"));

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <LoadingWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <Home />
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
            <Route
              path="/extracurricular"
              element={
                <Fragment>
                  <ExtracurricularActivities />
                  <Footer />
                </Fragment>
              }
            />
            <Route
              path="/dual_Diploma"
              element={
                <Fragment>
                  <DualDiploma />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/Career_Path"
              element={
                <Fragment>
                  <CareerPath />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/stem"
              element={
                <Fragment>
                  <StemPage />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/international_day"
              element={
                <Fragment>
                  <InternationalDay />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/community_service"
              element={
                <Fragment>
                  <CommunityService />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/events"
              element={
                <Fragment>
                  <Events />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/application"
              element={
                <Fragment>
                  <ApplicationFormPage />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/Contact_Us"
              element={
                <Fragment>
                  <ContactUs />
                  <Footer />
                </Fragment>
              }
            />

            <Route
              path="/elite_studio"
              element={
                <Fragment>
                  <EliteStudioPage />
                  <Footer />
                </Fragment>
              }
            />
          </Routes>
        </LoadingWrapper>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
