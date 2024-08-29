import React from "react";
import  "./Header.css"
// import icons from "../../assets/icons/icons";
import haderLogo from "../../assets/images/logo.png"
import menueImage from "../../assets/images/menu.png"
import profileImage from "../../assets/images/user.png"
import { Link, useLocation } from "react-router-dom";
import webColor from "../../assets/colors/Colors";

export const Header = () => {
    const location=useLocation()
    console.log("location>>>, ", location);
    
const headerItems=[
    {
        tabName:"Home",
        link:"/",
        style:location.pathname==="/" ? "underline" : "none"
        
    },
    {
        tabName:"About-Us",
        link:"/about-us",
        style:location.pathname==="/about-us" ? "underline" : "none"

    },
    {
        tabName:"Career",
        link:"/carrer",
        style:location.pathname==="/carrer" ? "underline" : "none"

    },
    {
        tabName:"Mission And Visson",
        link:"/mission&vission",
        style:location.pathname==="/mission&vission" ? "underline" : "none"

    },
    {
        tabName:"Report a Concern",
        link:"/repot-concern",
        style:location.pathname==="/repot-concern" ? "underline" : "none"

    },
    {
        tabName:"Accessibility Reports",
        link:"/accessibility-reports",
        style:location.pathname==="/accessibility-reports" ? "underline" : "none"

    },
    
]

  return (
    <div className="Header-Parrent">
      <div className="first-child">
        <div className="child-1 d-flex justify-content-between align-items-center p-2 px-5 " >
          <div className=" d-flex justify-content-between    socialMediaDivStyle" >
          <img src={haderLogo} width="150px" alt="logo" />
          </div>
        
        <div className="child-2 d-flex  ">
        {
    headerItems?.map((items) =>{
return(
    <div className="  mx-2">
        <Link className="text-decoration-none social-media-icons " style={{color:webColor.themeColor , textDecoration:"none"}} to={items.link}>
       <div
        // style={{borderBottom:"1px solid green"}}
        style={{textDecoration:items.style}}
        > {items.tabName}</div>
        </Link>
    </div>
)
    })
}
        </div>
        <div className="child-3 ">
            <img src={profileImage} width="25px" className="mx-3" alt="logo" />
            <img src={menueImage} className="social-media-icons" width="22px" alt="logo" />
            
            </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center bg-warning second-Child ">


      </div>
    </div>
  );
};
