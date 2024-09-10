import React from "react";
import { Routes, Route  } from "react-router-dom";
import { AboutUs } from "../pages/about/AboutUs";
import { Home } from "../pages/home/Home";
import { Career } from "../pages/carrer/Career";
import { Contact } from "../pages/contact/Contact";
import { PrivacyPolicy } from "../pages/privacyPolicy/PrivacyPolicy";
import { TermsCondition } from "../pages/termsAndCondition/TermsCondition";
import { Legacies } from "../pages/legacies/Legacies";
import { KidsCorner } from "../pages/kidsCorner/KidsCorner";
import { MissionVission } from "../pages/mission&Vission/MissionVission";
import { ReportaConcern } from "../pages/reportAconcern/ReportaConcern";
import { AccessibilityReports } from "../pages/accessibility-reports/AccessibilityReports";
import { Faqs } from "../pages/faqs/Faqs";
// import { publicRoutesList } from "./Routes";

const AppRoutes = () => {
    const publicRoutesList = [
        // { path: "/", element: <Home /> },
        { path: "/",exect:"exect", element: <Home/> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/career", element: <Career /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/terms&condtions", element: <TermsCondition /> },
        { path: "/legacies", element: <Legacies /> },
        { path: "/kidsCorner", element: <KidsCorner /> },
        { path: "/mission&vission", element: <MissionVission /> },
        { path: "/report-a-concern", element: <ReportaConcern /> },
        { path: "/accessibility-reports", element: <AccessibilityReports /> },
        { path: "/faqs", element: <Faqs /> },
       
      ];
  return (
    
    <Routes>
      {publicRoutesList.map((route, index) => (
        <Route key={index} exact={route.exect} path={route.path} element={route.element} />
      ))}
    </Routes>
     
    
  );
};

export default AppRoutes;
