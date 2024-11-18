import React, { useState } from "react";
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import { toast } from "react-toastify";
import { useRoutFunction } from "../../assets/others/UseFullFunctions";
import { Checkbox } from "@mui/material";
import Loader from "../../assets/loader/Loader";
import webColor from "../../assets/colors/Colors";
import { updatePassword } from "../../features/forgetPassword/forgetPasswordSlice";
import { useDispatch } from "react-redux";

const UpdatePassword = () => {
  const userObj = {
    password: "",
    password_confirmation: "",
  };
  const routeTo = useRoutFunction();
  const dispatch=useDispatch()

  const [isUserData, setIsUserData] = useState(userObj);
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState("");


  const submituserInfo = async () => {
    if (!isUserData.password || !isUserData.password_confirmation) {
      // toast.warn(!isUserData.userEmail ? `Fields${isUserData.userEmail}` : `${isUserData.password} Fields`)
      toast.warn("Empty Feilds");
    //   toast.warn(
    //     !isUserData.userEmail
    //       ? ` ${isUserData.password || "password is missing"}`
    //       : `${isUserData.password_confirmation || "Confirm Password is missing"}`
    //   );
    } else {
        const res = await dispatch(updatePassword(isUserData));
        setIsLoading(true)
        if (res?.payload.status === 0) {
          setIsVisible(res?.payload.message);
          setTimeout(() => {
            setIsVisible("");
          }, 5000);}
    }
  };
  const inputValues = (e) => {
    if (e?.target.type === "password") {
      setIsUserData({ ...isUserData, password: e?.target.value });
    }
    if (e?.target.type === "password_confirmation") {
      setIsUserData({ ...isUserData, password_confirmation: e?.target.value });
    }
  };

  const formContent = [
    {
      label: "Password",
      type: isViewPassword ? "text" : "password",
      icon: icons.passwordIcons,
      placeholder: "Password",

      className: "col-lg-12 col-md-6 col-sm-12  inputcontrolings  d-flex ",
      variant: true,
    },
    {
      label: "Confirm Password",
      type: isViewPassword ? "text" : "password",
      placeholder: "Confirm Password",

      icon: icons.passwordIcons,
      className: "col-lg-12 col-md-6 col-sm-12 inputcontrolings  my-2 d-flex ",
      variant: true,
    },

    {
      label: "Submit",
      type: "Submit",
    },
  ];

  return (
    <div className="sign-in -parent">
      <div className="parent container">
        <div className="row">
          <div className="img-section   vh-100 col-lg-4 d-md-none align-items-center justify-content-end d-lg-flex d-sm-none">
            <img src={bgImage1} width="200px" height="=400px" alt="logo" />
          </div>
          {isLoading ? (
            <div className=" col-lg-9   justify-content-center align-items-center d-flex">
              <Loader loading={isLoading} />
            </div>
          ) : (
            <div className="col-lg-8  justify-content-start align-items-center d-flex">
              <div className="form-parent">
                <form className="my-5 container control-width rounded-2 w-100  ">
                  <div className="heading-contant p-2 text-center ">
                    <h1 style={{ color: "#FDB515" }}>Create New Password</h1>
                    <p>Enter your new password</p>
                  </div>
                  <div className="from-body     ">
                    {formContent?.map((item) => {
                      return (
                        <div className={item.className}>
                          {item.type === "Submit" ? (
                             <div>
                   
                  <div>
                  {isVisible && <div className="text-danger">{isVisible}</div>}
                    
                    </div>
                            <div className="d-flex justify-content-between">
                                
                 
                                 <div  className="d-flex justify-content-between align-items-center">
                  
                                    
                      <Checkbox
                        checked={isViewPassword}
                        onChange={() => setIsViewPassword(!isViewPassword)}
                        sx={{
                          color: "default", // color when unchecked
                          "&.Mui-checked": {
                            color: webColor.themeColor, // change to your preferred color when checked
                          },
                        }}
                      />
                      Show Passwrod 
                    </div>
                              <Buttons
                                text={item.label}
                                className="my-2"
                                style={{ backgroundColor: "#FDB515" }}
                                onClick={submituserInfo}
                              />
                            </div>
                            </div>
                          ) : (
                            <Inputs
                              className=""
                              onChange={inputValues}
                              // onChange={() => setIsUserData({...isUserData , userEmail:})}
                              type={item.type}
                              icon={
                                <div style={{ color: "lightgrey" }}>
                                  {item.icon} {item.placeholder}
                                </div>
                              }
                              //   icon={ item.icon}
                              variants={item.variant}
                            />
                          )}
                          
                        </div>
                        
                      );
                    })}
                    
                    
                   
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
