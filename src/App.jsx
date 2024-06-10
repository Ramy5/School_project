import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Campuses, EducationalCurriculum, Fingerprint, Header, LandingPage, Nav, News } from "./components";
import { Fragment } from "react";
import SchoolType from "./components/SchoolType/SchoolType";

function App() {
  return (
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
