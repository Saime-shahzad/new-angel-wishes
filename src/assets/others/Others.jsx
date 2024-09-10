import Cards  from "../../components/cards/Cards";



export const MiddleHeader = ({ paragraphText, headingText }) => {
  return (
    <div className="middleHeader">
      <div className="child1">
        <div className="subChild ">
          <div className="tittle-parent text-center w-100  p-2">
            <h1>{headingText}</h1>
            <p>{paragraphText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CommonParagraph = ({
  paragraphText,
  style,
  className,
  headingText,
}) => {
  return (
    <div className="middleHeader">
      <div className="child1">
        <div className="subChild ">
          <div className={className}>
            <h3 className="py-1">{headingText}</h3>
            <p style={style ? style : { fontSize: "12px" }}>{paragraphText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
///this section used in carrer and accessibility reports page
export const BoxesSection = ({ headingText, subHeading, data }) => {
  return (
    <div className="middleHeader">
      <div className="child1">
        <div className="subChild ">
          <div>
            <h3 className="py-4 fw-bold text-center">{headingText}</h3>
            <p className="text-center">{subHeading}</p>
            <div className="container">
              <div className="row">
                {data?.map((item) => {
                  return (
                    <div className="box-parent col-lg-6 col-md-12 col-sm-12 hoverAnimation">
                      <div className="content-with-icon-parrent d-flex">
                        <div className="image-parent p-3 pt-2">
                          <img
                            src={item.image}
                            width={item.width}
                            alt="box-image"
                          />
                        </div>
                        <div className="box-content">
                          <h5>{item.headingText}</h5>
                          <p>{item.paragraphText}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ExtraBlueSection = ({ text, heading, className }) => {
  return (
    <div className="middleHeader">
      {/* <div className="  img-section "> */}
      <div
        //   className="d-flex "
        className={className}
      >
        {/* <div className="text-section  text-center  "> */}
        <div className="text-section  col-lg-6 col-md-6 col-sm-12 ">
          <div className=" ">
            <h1>{heading}</h1>
            <div className="">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CardSections = ({ text, heading, className ,data }) => {
  return (
    <div className="middleHeader row ">
      {
        data?.map((item) =>{

return(
      <div className={item.className}>
         <Cards headingText={item.heading} paragraphText={item.paragraphText} image={item.image} imageSize={item.imageSize}/>
      </div>)
        })
      }
    </div>
  );
};
