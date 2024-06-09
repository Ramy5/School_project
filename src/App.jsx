import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Campuses, Header, LandingPage, Nav } from "./components";
import { Fragment } from "react";

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
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
