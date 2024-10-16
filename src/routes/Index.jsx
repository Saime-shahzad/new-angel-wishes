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
import SignIn from "../pages/signIn/SignIn";
import  SignUp  from "../pages/signUp/SignUp";
import Packages from "../pages/packages/Packages";
import ForgetPassword from "../pages/forgetPassword/ForgetPassword";
import UpdatePassword from "../pages/updatePassword/UpdatePassword";
import Dashboard from "../pages/dashboard/Dashboard";
import {Memories} from "../pages/memories/Memories";
import DetailAudioList from "../pages/detailAudioList/DetailAudioList";
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
        { path: "/mission&vision", element: <MissionVission /> },
        { path: "/report-a-concern", element: <ReportaConcern /> },
        { path: "/accessibility-reports", element: <AccessibilityReports /> },
        { path: "/faqs", element: <Faqs /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "/forgetPassword", element: <ForgetPassword /> },
        { path: "/updatePassword", element: <UpdatePassword /> },
        { path: "/packages-details", element: <Packages /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/memories", element: <Memories /> },
        { path: "/audioList", element: <DetailAudioList /> },

       
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
