import React, { useState } from "react";
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import { useRoutFunction } from "../../assets/others/UseFullFunctions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Checkbox } from "@mui/material";
import webColor from "../../assets/colors/Colors";
import Loader from "../../assets/loader/Loader";

const SignUp = () => {
  const userObj = {
    first_name: "",
    last_name: "",
    contact_no: "",
    country: "",
    email: "",
    password: "",
    password_confirmation: "",
    image: "",
    date_of_birth: "",
  };
  const RoutFunction = useRoutFunction();
  const [isUserData, setIsUserData] = useState(userObj);
  const [isVisible, setIsVisible] = useState("");
 const [preview, setPreview] = useState(null);
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const formContent = [
    {
      label: "First Name",
      type: "text",
      icon: icons.manIcons,
      placeholder: "First Name",
      onChange: (e) =>
        setIsUserData({ ...isUserData, first_name: e.target.value }),
      className:
        "col-lg-6 col-md-12 col-sm-12  justify-content-lg-center justify-content-sm-start my-2 inputcontrolings  d-flex ",
      variant: true,
    },
    {
      label: "Last Name",
      type: "text",
      icon: icons.manIcons,
      placeholder: "Last Name",
      onChange: (e) =>
        setIsUserData({ ...isUserData, last_name: e.target.value }),

      className:
        "col-lg-6 col-md-12 col-sm-12  justify-content-lg-center justify-content-sm-start my-2 inputcontrolings  d-flex ",
      variant: true,
    },
    {
      label: "Contact Number",
      type: "number",
      icon: icons.mailIcons,
      placeholder: "Contact Number",
      onChange: (e) =>
        setIsUserData({ ...isUserData, contact_no: e.target.value }),

      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2  d-flex ",
      variant: true,
    },
    {
      label: "Country",
      type: "text",
      icon: icons.mailIcons,
      placeholder: "Country",
      onChange: (e) =>
        setIsUserData({ ...isUserData, country: e.target.value }),

      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2  d-flex ",
      variant: true,
    },
    {
      label: "Email",
      type: "email",
      icon: icons.mailIcons,
      placeholder: "Email",
      onChange: (e) => setIsUserData({ ...isUserData, email: e.target.value }),

      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2 d-flex ",
      variant: true,
    },
    {
      label: "Date Of Birth",
      type: "datePicker",

      name: "datePicker",
      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2 d-flex ",
      variant: true,
    },
    {
      label: "Password",
      type: isViewPassword ? "text" : "password",
      icon: icons.passwordIcons,
      placeholder: "Password",
      onChange: (e) =>
        setIsUserData({ ...isUserData, password: e.target.value }),

      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2 d-flex ",
      variant: true,
    },
    {
      label: "Confirm Password",
      type: isViewPassword ? "text" : "password",
      icon: icons.passwordIcons,
      placeholder: "Confirm Password",

      onChange: (e) =>
        setIsUserData({ ...isUserData, password_confirmation: e.target.value }),

      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2 d-flex ",
      variant: true,
    },
    {
      label: "Upload Image",
      type: "file",

      name: "uploadImage",
      className: "col-lg-6 col-md-12 col-sm-12  inputcontrolings my-2 d-flex ",
      variant: true,
    },
  ];

  const onSignup = async () => {
    if (isUserData.password !== isUserData.password_confirmation) {
      setIsVisible("Password Must Be Same");
      setTimeout(() => {
        setIsVisible("");
      }, 5000);
    } else if (
      isUserData.first_name &&
      isUserData.last_name &&
      isUserData.email &&
      isUserData.country &&
      isUserData.contact_no &&
      isUserData.image &&
      isUserData.password &&
      isUserData.password_confirmation &&
      isUserData.date_of_birth
    ) {
      const formData = new FormData();
      formData.append("first_name", isUserData.first_name);
      formData.append("last_name", isUserData.last_name);
      formData.append("contact_no", isUserData.contact_no);
      formData.append("country", isUserData.country);
      formData.append("email", isUserData.email);
      formData.append("password", isUserData.password);
      formData.append(
        "password_confirmation",
        isUserData.password_confirmation
      );

      formData.append("image", isUserData.image);
      formData.append("date_of_birth", isUserData.date_of_birth);

      const res = await dispatch(registerUser(formData));
      if (res?.payload.status === 0) {
        setIsVisible(res?.payload.message);
        setTimeout(() => {
          setIsVisible("");
        }, 5000);
      } else {
      setIsLoading(true)

        setTimeout(() => {
          
          setIsLoading(false)
          toast.success("SuccessFully Regesterd");
  
          RoutFunction("/packages-details");
        }, 2000);
      }
    } else {
      toast.error("Empty fields");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setIsUserData({ ...isUserData, image: file });

    // Generate a preview of the file (image/video)
    if (file) {
      const fileUrl = URL?.createObjectURL(file);
      setPreview(fileUrl);
    }
  };
  return (
    <div className="sign-in-parent">
      <div className="parent container" style={{ marginLeft: "10px" }}>
        <div className="row">
          <div className="img-section  justify-content-end vh-100 col-lg-3 d-md-none align-items-center d-lg-flex d-none">
            <img src={bgImage1} width="200px" height="=400px" alt="logo" />
          </div>
          {isLoading ?  <div className=" col-lg-9   justify-content-center align-items-center d-flex">

<Loader loading={isLoading} /></div> :
          <div className="col-lg-9  justify-content-start align-items-center d-flex">
            <div className="form-parent">
              <form className="my-5 container control-width rounded-2 w-100">
                <div className="heading-contant p-2 text-center ">
                  {preview ? (
                    <div style={{ marginTop: "20px", borderRadius: "30px" }}>
                      <img
                        src={preview}
                        alt="Preview"
                        className="rounded-5"
                        height="150"
                        width="200px"
                      />
                    </div>
                  ) : (
                    <h1 style={{ color: "#FDB515" }}>Sign Up</h1>
                  )}
                </div>
                <div className="from-body  row   ">
                  {formContent?.map((item) => {
                    return (
                      <div className={item.className}>
                        {item.type === "file" ? (
                          <div className="text-dark w-100">
                            <input
                              type="file"
                              accept="image/*,video/*"
                              onChange={handleFileChange}
                              id="fileInput"
                              className="fileControl d-none "
                            />
                            <div>
                              <Checkbox
                                checked={isViewPassword}
                                onChange={() =>
                                  setIsViewPassword(!isViewPassword)
                                }
                                sx={{
                                  color: "default", // color when unchecked
                                  "&.Mui-checked": {
                                    color: webColor.themeColor, // change to your preferred color when checked
                                  },
                                }}
                              />
                              Show Passwrod
                            </div>
                            <label
                              htmlFor="fileInput"
                              className="custom-upload-button   w-100"
                            >
                              {icons.addPhotoAlternateIcons} Profile Image
                            </label>
                          </div>
                        ) : item.type === "datePicker" ? (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              sx={{ width: "100%", borderRadius: "15px" }}
                              components={["DatePicker"]}
                            >
                              <DatePicker
                                label={
                                  <div style={{ color: "#D6D3D3" }}>
                                    {icons.mailIcons} Date Of Birth
                                  </div>
                                }
                                onChange={(newValue) => {
                                  // Format the selected date using moment and update state

                                  const dateofBirth = newValue
                                    ? newValue.toISOString().split("T")[0]
                                    : "";
                                  console.log("Formatted date:", dateofBirth);
                                  setIsUserData({
                                    ...isUserData,
                                    date_of_birth: dateofBirth,
                                  });
                                }}
                                className="w-100 datepickerControl"
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        ) : (
                          <Inputs
                            className=""
                            type={item.type}
                            icon={
                              <div style={{ color: "lightgrey" }}>
                                {item.icon} {item.placeholder}
                              </div>
                            }
                            suffix={item.suffix}
                            //   icon={ item.icon}
                            name={item.name}
                            onChange={item.onChange}
                            variants={item.variant}
                          />
                        )}
                      </div>
                    );
                  })}

                  {isVisible && <div className="text-danger">{isVisible}</div>}
                </div>
                <div className="d-flex justify-content-center">
                  <Buttons
                    text="Sign Up"
                    onClick={onSignup}
                    style={{ backgroundColor: "#FDB515" }}
                  />
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
