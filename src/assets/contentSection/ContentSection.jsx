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
              <div data-aos="fade-right" className={item.possition === "left" ? "img-section col-lg-6 col-md-6 col-sm-12 d-flex align-items-center" : "col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center"}>
                {item.img ?
                  <img src={item.img} width="80%" height="400px" alt="home-1" /> : ""}
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
