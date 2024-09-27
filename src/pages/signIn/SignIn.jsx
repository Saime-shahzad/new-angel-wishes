import React from 'react'
import homeBackGround from "../../assets/images/homeBackGround.png";
import bgImage1 from "../../assets/images/bgImage1.png";
import { Inputs } from '../../assets/input/Inputs';
import { Buttons } from '../../components/button/Buttons';
import icons from '../../assets/icons/icons';


const SignIn = () => {
    const formContent = [
        {
          label: "Email",
          type: "email",
          icon:icons.mailIcons,
          placeholder:"Email",

          className:"col-lg-6 col-md-6 col-sm-12  inputcontrolings  d-flex ",
          variant:true
        },
        {
            label: "Password",
            type: "password",
          placeholder:"Password",

            icon:icons.passwordIcons,
            className:"col-lg-6 col-md-6 col-sm-12 inputcontrolings  my-2 d-flex ",
          variant:true
        },
     
     
       
        {
            label: "Submit",
            type: "Submit",
        },
      ];
  return (
    <div className='sign-in -parent'  style={{
        backgroundImage: `url(${homeBackGround})`,
        backgroundSize: "cover", // Makes the image cover the entire div while maintaining aspect ratio
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        width: "100%", // Ensures the div takes up the full width of its container
        height: "100vh", // Makes the div take up the full viewport height (adjust if necessary)
      }}>
<div className='parent container' 
   >

<div className='row'>
    <div className='img-section   vh-100 col-lg-4 d-md-none align-items-center d-lg-flex d-sm-none' >
<img src={bgImage1} width="200px" height="=400px" alt='logo' />
    </div>
    <div className='col-lg-8  justify-content-start align-items-center d-flex'>
        <div className='form-parent'>
        <form
          className="my-5 container control-width rounded-2 w-100  "
        >
          <div className="heading-contant p-2 text-center ">
            <h1 style={{color:"#FDB515"}} >Sign In</h1>
           
          </div>
          <div className="from-body     ">
            {formContent?.map((item) => {
              return (
                <div
                  className={item.className}
                 
                >
                    {item.type === "Submit" ? (
                        <div className='d-flex justify-content-between'>
                            <Buttons text={item.label} style={{backgroundColor:"#FDB515"}} type={item.type}/>
                        <div style={{color:"#21668E" , cursor:"pointer"}}>forget Password?</div>
                            </div>
                    ) : (
                    <Inputs
                    className= ""
                      type={item.type}
                      icon={<div style={{color:"lightgrey"}} >{ item.icon} {item.placeholder}
                      </div>}
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
  )
}

export default SignIn