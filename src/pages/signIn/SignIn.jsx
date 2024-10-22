import React, { useEffect, useState } from "react";
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import { toast } from "react-toastify";
import { useRoutFunction } from "../../assets/others/UseFullFunctions";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const routeTo = useRoutFunction();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

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

  const submituserInfo = () => {
    if (!isUserData.userEmail || !isUserData.password) {
      // toast.warn(!isUserData.userEmail ? `Fields${isUserData.userEmail}` : `${isUserData.password} Fields`)
      toast.warn(
        !isUserData.userEmail
          ? ` ${isUserData.userEmail || "Email is missing"}`
          : `${isUserData.password || "Password is missing"}`
      );

      dispatch(
        loginUser({
          email: isUserData.userEmail,
          password: isUserData.password,
        })
      );
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Logged in successfully");
      routeTo("/dashboard");
    }
    if (error) {
      toast.error("Error in logging in");
    }
  }, [isAuthenticated, error, routeTo]);

  const formContent = [
    {
      label: "Email",
      type: "email",
      icon: icons.mailIcons,
      placeholder: "Email",

      className: "col-lg-6 col-md-6 col-sm-12  inputcontrolings  d-flex ",
      variant: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",

      icon: icons.passwordIcons,
      className: "col-lg-6 col-md-6 col-sm-12 inputcontrolings  my-2 d-flex ",
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
          <div className="col-lg-8  justify-content-start align-items-center d-flex">
            <div className="form-parent">
              <form className="my-5 container control-width rounded-2 w-100  ">
                <div className="heading-contant p-2 text-center ">
                  <h1 style={{ color: "#FDB515" }}>Sign In</h1>
                </div>
                <div className="from-body     ">
                  {formContent?.map((item) => {
                    return (
                      <div className={item.className}>
                        {item.type === "Submit" ? (
                          <div className="d-flex justify-content-between">
                            <Buttons
                              text={item.label}
                              style={{ backgroundColor: "#FDB515" }}
                              onClick={submituserInfo}
                            />
                            <div
                              style={{ color: "#21668E", cursor: "pointer" }}
                              onClick={() => {
                                routeTo("/forgetPassword");
                              }}
                            >
                              forget Password?
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
