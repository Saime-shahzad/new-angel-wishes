import React, { useEffect, useState } from 'react'
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from '../../assets/input/Inputs';
import { Buttons } from '../../components/button/Buttons';
import icons from '../../assets/icons/icons';
import { toast } from 'react-toastify';
 import Loader from "../../assets/loader/Loader"
import { useRoutFunction } from '../../assets/others/UseFullFunctions';
import { forgetPassword } from '../../features/forgetPassword/forgetPasswordSlice';
import { useDispatch } from 'react-redux';
import webColor from '../../assets/colors/Colors';



const ForgetPassword = () => {
    const userObj = {
        email: "",
    }
  const routeTo = useRoutFunction();
  const dispatch = useDispatch();



    const [isUserData, setIsUserData] = useState(userObj)
    const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState("");
  const [isMessage, setIsMessage] = useState(false);


   

    const submituserInfo =async(e) => {
        e.preventDefault();
        if (!isUserData.email) {
            // toast.warn(!isUserData.email ? `Fields${isUserData.email}` : `${isUserData.password} Fields`)
            toast.warn(
                !isUserData.email
                    ? ` ${isUserData.email || 'Email is missing'}`
                    : ""
            );

        }
        else{
            if(!isUserData.email.includes(".com")){
                toast.warn("Invalid Email")
                
            }
            else{
                
        const res = await dispatch(
            forgetPassword(
                isUserData
            )
          );
          if (res?.payload.status === 0) {
            setIsVisible(res?.payload.message);
            setTimeout(() => {
              setIsVisible("");
            }, 5000);
          } else {
          setIsLoading(true)
    
            setTimeout(() => {
              
              setIsLoading(false)
              toast.success("Email Send Successfully")
              setIsMessage(true)
             
            }, 2000);
    
          }
        
          

                // setTimeout(() => {
                    
                //     setIsLoading(false)
                //     if("200"){
    
                //         routeTo("/sign-in")
                //     }
                //     else{
                //         toast.warn("Incorrect Email")
                //     }
    
                    
                // }, 3000);

            }
        }
    }
    const inputValues = ((e) => {

        if (e?.target.type === "email") {
            setIsUserData({ ...isUserData, email: e?.target.value })
        }
        

    })

    const formContent = [
        {
            label: "Email",
            type: "email",
            icon: icons.mailIcons,
            placeholder: "Email",

            className: "col-lg-12 col-md-6 col-sm-12  inputcontrolings  d-flex ",
            variant: true
        },




        {
            label: "Submit",
            type: "Submit",
        },
    ];
    return (
        <div className='sign-in -parent'>
            <div className='parent container'
            >
                {!isMessage ? (
                    <div className='text-center vh-100  d-flex align-items-center justify-content-center'>
                        <div>
                    <h1>Thank <span style={{color:webColor.themeColor}}> You!</span></h1>

                    <p>Your Response Has Been Subbmitted Please Go Back to continue</p>
                    <Buttons text="go Back" style={{backgroundColor:webColor.themeColor}} onClick={()=> routeTo("/sign-in")} /> 
                    </div>
                    </div>):

                <div className='row'>
                    <div className='img-section   vh-100 col-lg-4 d-md-none align-items-center justify-content-end d-lg-flex d-sm-none' >
                        <img src={bgImage1} width="200px" height="=400px" alt='logo' />
                    </div>
                    <div className='col-lg-8  justify-content-start align-items-center d-flex'>
                        <div className='form-parent'>
                            <form
                             onSubmit={(e) => e.preventDefault()} 
                                className="my-5 container control-width rounded-2 w-100  "
                            >
                                <div className="heading-contant p-2 text-center  my-3">
                                    <h1 style={{ color: "#FDB515" }} >Forgot Password</h1>
                                    <p>
                                    Enter your email address & we’ll send you a link to reset your password
                                    </p>

                                </div>
                                {!isLoading ?
                                
                                <div className="from-body     ">
                                    {formContent?.map((item) => {
                                        return (
                                            <div
                                                className={item.className}
 
                                            >
                                                {item.type === "Submit" ? (
                                                    <div className="">
                                                                          {isVisible && <div className="text-danger">{isVisible}</div>}

                                                    <div className='d-flex justify-content-between'>
                                                        <Buttons className="mt-2" type="button"  text={item.label} style={{ backgroundColor: "#FDB515" }} onClick={submituserInfo} />

                                                    </div>
                                                    </div>
                                                ) : (
                                                    <Inputs
                                                        className=""
                                                        onChange={inputValues}
                                                        // onChange={() => setIsUserData({...isUserData , email:})}
                                                        type={item.type}
                                                        icon={<div style={{ color: "lightgrey" }} >{item.icon} {item.placeholder}
                                                        </div>}
                                                        //   icon={ item.icon}
                                                        variants={item.variant}
                                                    />

                                                )}
                                            </div>

                                        );
                                    })}
                                </div>
                               : <Loader /> }

                            </form>


                        </div>
                    </div>

                </div>
                }
            </div>



        </div>
    )
}

export default ForgetPassword