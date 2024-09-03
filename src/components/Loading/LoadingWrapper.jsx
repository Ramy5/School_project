import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import { Suspense } from "react";

const LoadingWrapper = ({ children }) => {
  const location = useLocation();

  // Map routes to page names
  const pageNames = {
    "/": "Home",
    "/about": "About",
    "/elite_Graduates": "Elite Graduates",
    "/TedX": "TedX",
    "/spelling_bee": "Spelling Bee",
    "/MUN": "MUN Participation",
    "/robotics": "Robotics Contest",
    "/curriclum": "Curriculum",
  };

  const pageName = pageNames[location.pathname] || "Page";

  return <Suspense fallback={<Loading pageName={pageName} />}>{children}</Suspense>;
};

export default LoadingWrapper;
