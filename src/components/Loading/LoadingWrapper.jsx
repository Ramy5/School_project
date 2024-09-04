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
    "/extracurricular": "Extracurricular Activities",
    "/CareerPath": "Career Path",
    "/stem": "Stem",
    "/international_day": "International Day",
    "/community_service": "Community Service",
    "/events": "Events",
    "/Application_Form": "ApplicationForm",
    "/Contact_Us": "Contact Us",
  };

  const pageName = pageNames[location.pathname] || "Page";

  return (
    <Suspense fallback={<Loading pageName={pageName} />}>{children}</Suspense>
  );
};

export default LoadingWrapper;
