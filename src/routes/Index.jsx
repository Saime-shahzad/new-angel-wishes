import React from "react";
import { Routes, Route  } from "react-router-dom";
import { AboutUs } from "../pages/about/AboutUs";
import { Home } from "../pages/home/Home";
// import { publicRoutesList } from "./Routes";

const AppRoutes = () => {
    const publicRoutesList = [
        // { path: "/", element: <Home /> },
        { path: "/",exect:"exect", element: <Home/> },
        { path: "/about-us", element: <AboutUs /> },
       
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
