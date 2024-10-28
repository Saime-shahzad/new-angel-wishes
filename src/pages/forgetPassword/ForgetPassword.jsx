import React, { useEffect, useState } from 'react'
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from '../../assets/input/Inputs';
import { Buttons } from '../../components/button/Buttons';
import icons from '../../assets/icons/icons';
import { toast } from 'react-toastify';
 import Loader from "../../assets/loader/Loader"
import { useRoutFunction } from '../../assets/others/UseFullFunctions';
import { forgetPassword } from '../../features/forgetPassword/forgetPasswordSlice';
import { useDispatch, useSelector } from 'react-redux';



const ForgetPassword = () => {
    const userObj = {
        email: "",
    }
  const routeTo = useRoutFunction();
  const dispatch = useDispatch();



    const [isUserData, setIsUserData] = useState(userObj)
    const [isLoading, setIsLoading] = useState(false)
    const [isResponse, setIsResponse] = useState([])

    const { data} = useSelector(
        (state) => state.passwordReset
      );

useEffect(() => {
 setIsResponse(data)
  
}, [data])


    const submituserInfo = (() => {
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
                setIsLoading(true)
                
          dispatch(
            forgetPassword(
                isUserData
            )
          );

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
    })
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

                <div className='row'>
                    <div className='img-section   vh-100 col-lg-4 d-md-none align-items-center justify-content-end d-lg-flex d-sm-none' >
                        <img src={bgImage1} width="200px" height="=400px" alt='logo' />
                    </div>
                    <div className='col-lg-8  justify-content-start align-items-center d-flex'>
                        <div className='form-parent'>
                            <form
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
                                                    <div className='d-flex justify-content-between'>
                                                        <Buttons className="mt-2" text={item.label} style={{ backgroundColor: "#FDB515" }} onClick={submituserInfo} />

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
            </div>



        </div>
    )
}

export default ForgetPassword