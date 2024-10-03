import React from 'react'
import Cards  from "../../components/cards/Cards";
import icons from '../../assets/icons/icons';
import webColor from '../../assets/colors/Colors';
// import upArrowimg from "../../assets/images/upArrowimg.png"
// import downArrowimg from "../../assets/images/downArrowimg.png"


const Packages = () => {
    const packagesDetailsContent=[

        {
        packageName:"Premium Package",
        price:<div className='text-center rounded-top-2 ' style={{margin:"0px 30px 0px 30px" , backgroundColor:webColor.themeColor}}>
            <p  style={{color:"white" , margin:"0px" , fontSize:"88px"}}>$10<sub style={{fontSize:"10px" , textAlign:"center"}}>Per month</sub></p>
        </div>,
        //fe represent features
        fe1:["Basic features plus",

          "Favorite Music List using links",
          "Hipaa Compliance",
          "Estate Plan folders password protected (restricted to the specific nominees for that folder to be assigned by the client)",
          "Create Videos of life stories favorite memories or upload favorite life's moments videos",
          "Allow other family and friends upload best memories with client -pictures via a link (client and their nominee can approve them)",
          "Background pic or header to customize look and feel ( beach, sunset, sunrise, flowers, birds like cardinals, ect)",
        ],
        }
    ]
  return (
    <div className='package-Parent container my-5'>

        <div className='child-1 row  justify-content-center'>
        {/* <div style={{position:"relative", left:"3px", top:"221px"}}>
            <img src={upArrowimg}  width="30px"  alt="oops!"/>
            </div> */}
            {packagesDetailsContent?.map((item) =>{
                return(
                    <div className='card-Parent my-5 col-lg-4 col-md-6 col-sm-12 '>
                        <Cards 
                        paragraphText={item?.fe1.map((item) =>{
                            return(
                                <div className='list-parrent  '>
                                   
                                    <div className='d-flex px-2 '>
                                        
                                        <div className='px-2'> {icons.checkCircleIcon}</div>
                                        <p>
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            )
                        } )}
                        
                        headingText={item.price}
                        subHeading={item.packageName}
                        
                        
                        />
                    </div>
                )
            })}
     {/* <div style={{position:"relative", left:"380px", top:"266px"}}>
            <img src={downArrowimg}  width="30px"  alt="oops!"/>
            </div> */}
        </div>
    </div>
  )
}

export default Packages