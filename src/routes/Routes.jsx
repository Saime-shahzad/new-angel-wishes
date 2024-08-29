import React from "react";
// import Home from "../pages/home/Home";
// import { Home } from "../pages/home/Home";
import { AboutUs } from "../pages/about/AboutUs";




const publicRoutesList = [
  // { path: "/", element: <Home /> },
//   { path: "/",exect:"exect", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
 
];

const privateRoutesList = [
  // {path:"/*", element : <Home />}
];

export { publicRoutesList, privateRoutesList };
