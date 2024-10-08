import React from "react";
// import "./ContentStyle.css"

export const ContentSection = ({

  data,
}) => {
  return (
    <div className="ContentSection-parent my-5 ">
      <div className="chaild-1 container">
        {data?.map((item) => {
          return (
            <div
              //   className="d-flex "
              className={item.className}
            >
              {/* <div className="text-section  text-center  "> */}
              <div className="text-section  d-flex align-items-center col-lg-6 col-md-6 col-sm-12 "
                data-aos="fade-up"
               >

                <div className=" w-100">
                  <h1>{item.heading}</h1>
                  <h5>{item.subHeading}</h5>
                  <div className="">{item.text}</div>
                </div>
              </div>


              {/* <div className="  img-section "> */}
              <div data-aos="fade-right" className={item.possition === "left" ? "img-section col-lg-6 col-md-6 col-sm-12 d-flex align-items-center" : "col-lg-6 col-md-6 col-sm-12 d-flex justify-content-start align-items-center"} style={{width:item.vedios ? "100%" : ""}}>
                {item.img &&
                  <img src={item.img} width={item.sizes? item.sizes[0] :"584px"} height={item.sizes? item.sizes[1] :"388px"} alt="home-1" /> }
                 {item.vedios &&  <video
              controls // Add controls for the video player
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
              className="w-100"
            >
              <source src={item.vedios} type="video/mp4" />
              {/* Provide the source of your video */}
            </video>}
                  
              </div>
              {/* ///extra content section */}

              {item.extraContent && <div>
                {item.extraContent}

              </div>}
              {/* ///closed/// */}
            </div>
          );
        })}
      </div>
    </div>


  );
};
