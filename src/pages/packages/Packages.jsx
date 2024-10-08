import React from 'react'
import Cards from "../../components/cards/Cards";
import icons from '../../assets/icons/icons';
import webColor from '../../assets/colors/Colors';
// import upArrowimg from "../../assets/images/upArrowimg.png"
// import downArrowimg from "../../assets/images/downArrowimg.png"


const Packages = () => {
    const packagesDetailsContent = [

        {
            packageName: "Legacy Package",
            price: <div className='text-center rounded-top-2 ' style={{ margin: "0px 30px 0px 30px", backgroundColor: webColor.themeColor }}>
                <p style={{ color: "white", margin: "0px", fontSize: "88px" }}>$10<sub style={{ fontSize: "10px", textAlign: "center" }}>Per month</sub></p>
            </div>,
            //fe represent features
            fe1: [
                "Upload & Share Memories",
                "Upload Pictures: Family and friends can upload their favorite photos via a shared link.",
                "Slideshow: Turn uploaded pictures into a customizable slideshow with captions and music.",

                "Music & Videos",
                "Favorite Music List: Add songs through links to platforms like Spotify or YouTube, or upload local files.",
                "Upload Videos: Share videos of life’s favorite moments or create new ones telling stories.",

                "Estate Planning & Wishes",
                "All Wishes Folder: Organize personal wishes into emotional, financial, spiritual, mental, and physical categories.",
                "Financial Power of Attorney & Will: Guidance on creating legal documents for finances and assets.",
                "Health Care Directives: Upload health care powers of attorney and advanced directives for medical decision-making.",
                "POLST/MOLST Forms: Manage life-sustaining treatment forms.",
                "Final Arrangements: A folder for a funeral or memorial service wishes.",


                "Medical Documents Folder (HIPAA Compliance)",
                "Secure Folder: Store medical documents for doctor review, excluding faxing options.",
                "Restricted Access Post-Death: After death, nominees will have restricted access to the folder and the option to delete it after a set date.",


                "Additional Resources",
                "Insurance Agents: Connect with agents for end-of-life insurance.",
                "Grief Counseling: Links to grief counseling services.",
                "End-of-Life Doulas: Information on doulas offering emotional and practical support.",
                "Final Arrangements: Connections to funeral or cremation services.",
                "Trust & Estate Information: Educational resources on wills and trusts.",

                "17 and Under Section",
                "Nominees: Up to 3 nominees (parents or guardians) can manage the section.",
                "Family Albums: Separate albums for families in different households.",
                "Favorite Moments: Upload pictures and videos capturing favorite moments and life stories.",
                "Favorite Music & Animals: Lists of favorite songs and animals.",
                "Creative Uploads: Upload drawings and other creative works.",

                ///old//////

                "Upload pictures",

                //   "Be able to turn pictures into a slide show",
                //   "Letters to family members (children) creating individual folders using with password protection code",
                //   "QR code to be made into stickers, printed, text, or emailed",
                //   "Used on a card next to turn or service pamphlet and circulate amongst family and friends (to be used once a person passes on to share at the celebration of life or other service).",
                //   "Medical docs folder for doctor to review to be able to view uploaded tests.",
                //   "Able to E-fax docs from folder to medical facilities including Medical POA docs, any uploaded tests, and Hipaa Compliance form.",
                //   "Once person dies, we will move the medical folder to an area no longer accessible to anyone. ite Music List using links.",
                //   "Hipaa Compliance form",
                //   "Estate Plan folders restricted to the specific nominees for that folder to be Assigned by client.",
                //   "Create Videos of life stories favorite memories or upload favorite life's moments videos.",
                //   "Allow other family and friends upload best memories with client-pictures via a link (client and their nominee can approve them)",
                //   "Background pic or header to customize look and feel (beach, sunset, sunrise, flowers, birds like cardinals, etc.)"
            ],
        }
    ]
    return (
        <div className='package-Parent container my-5'>

            <div className='child-1 row  justify-content-center'>
                {/* <div style={{position:"relative", left:"3px", top:"221px"}}>
            <img src={upArrowimg}  width="30px"  alt="oops!"/>
            </div> */}
                {packagesDetailsContent?.map((item) => {
                    return (
                        <div className='card-Parent my-5 col-lg-4 col-md-6 col-sm-12 '>
                            <Cards
                                paragraphText={item?.fe1.map((item) => {
                                    return (
                                        <div className='list-parrent  '>

                                            <div className='d-flex px-2 '>

                                                <div className={
                                                    (
                                                        item === "Upload & Share Memories" ||
                                                        item === "Music & Videos" ||
                                                        item === "Estate Planning & Wishes" ||
                                                        item === "Medical Documents Folder (HIPAA Compliance)" ||
                                                        item === "Additional Resources" ||
                                                        item === "17 and Under Section"
                                                    ) ? "d-none " : "px-2"}> {icons.checkCircleIcon}</div>
                                                <p className={(
                                                        item === "Upload & Share Memories" ||
                                                        item === "Music & Videos" ||
                                                        item === "Estate Planning & Wishes" ||
                                                        item === "Medical Documents Folder (HIPAA Compliance)" ||
                                                        item === "Additional Resources" ||
                                                        item === "17 and Under Section"
                                                    )  ? "fw-bold fs-6 text-dark px-2 " : ""}>
                                                    {item}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}

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