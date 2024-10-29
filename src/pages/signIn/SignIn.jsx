import React, { useEffect, useState } from "react";
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import { toast } from "react-toastify";
import { useRoutFunction } from "../../assets/others/UseFullFunctions";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import Loader from "../../assets/loader/Loader";
import webColor from "../../assets/colors/Colors";

const SignIn = () => {
  const dispatch = useDispatch();
  const routeTo = useRoutFunction();

  const { loading, error, isAuthenticated , token} = useSelector(
    (state) => state.auth
  );
  const [isVisible, setIsVisible] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  

  const userObj = {
    userEmail: "",
    password: "",
  };

  const [isUserData, setIsUserData] = useState(userObj);
  const inputValues = (e) => {
    if (e?.target.type === "password") {
      setIsUserData({ ...isUserData, password: e?.target.value });
    }
    if (e?.target.type === "email") {
      setIsUserData({ ...isUserData, userEmail: e?.target.value });
    }
  };

  const submituserInfo = async () => {
    
    
    if (isUserData.userEmail && isUserData.password) {
     

   const res=await dispatch(
        loginUser({
          email: isUserData.userEmail,
          password: isUserData.password,
        })
      );
      console.log("res>>>>" , res);
      
      if (res?.payload.status === 0) {
        setIsVisible(res?.payload.message);
        setTimeout(() => {
          setIsVisible("");
        }, 5000);
      } else {
      setIsLoading(true)

        setTimeout(() => {
          
          setIsLoading(false)
          toast.success("Login in SuccessFully");
          routeTo("/dashboard");
        }, 2000);

      }
    }
    else{
      toast.warn(
        !isUserData.userEmail
          ? ` ${isUserData.userEmail || "Email is missing"}`
          : `${isUserData.password || "Password is missing"}`
      );

      
    }
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     toast.success("Logged in successfully");
  //     routeTo("/dashboard");
  //   }
  //   if (error) {
  //     toast.error("Invalid Details");
  //   }
  // }, [isAuthenticated, error]);

  const formContent = [
    {
      label: "Email",
      type: "email",
      icon: icons.mailIcons,
      placeholder: "Email",

      className: "col-lg-12 col-md-6 col-sm-12 inputcontrolings my-2",
      variant: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",

      icon: icons.passwordIcons,
      className: "col-lg-12 col-md-6 col-sm-12 inputcontrolings   my-2",
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
          {isLoading ?  <div className=" col-lg-8   justify-content-center align-items-center d-flex">

<Loader loading={isLoading} /></div> :
          <div className="col-lg-8  justify-content-start align-items-center d-flex">
            <div className="form-parent">
              <form className="my-5 container control-width rounded-2 w-100  ">
                <div className="heading-contant p-2 text-center ">
                  <h1 style={{ color: "#FDB515" }}>Sign In</h1>
                </div>
                <div className="from-body  row w-75  ">
                  {formContent?.map((item) => {
                    return (
                      <div className={item.className}>
                        
                        {item.type === "Submit" ? (
                          
                          <div >
                  {isVisible && <div className="text-danger">{isVisible}</div>}
                            
                            
                            <div className="d-flex justify-content-between">
                              
                            <Buttons
                              text={item.label}
                              style={{ backgroundColor: "#FDB515" }}
                              onClick={submituserInfo}
                            />
                            <div
                              style={{ color: webColor.themeColor, cursor: "pointer" }}
                              onClick={() => {
                                routeTo("/forgetPassword");
                              }}
                            >
                              forget Password?
                            </div>
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

                  <div className="d-flex justify-content-end">Not a member? <span onClick={() => routeTo("/sign-up")} style={{color:webColor.themeColor , cursor:"pointer"}}> Register now</span></div>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
