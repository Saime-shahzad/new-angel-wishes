import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import icons from '../../assets/icons/icons';
import { Buttons } from '../../components/button/Buttons';
import useRoutFunction from '../../assets/others/UseFullFunctions';

export const Faqs = () => {
    const RoutFunction = useRoutFunction();

    const faqsData=[
        {
            accordianSummary:"Q: What is Angel Wishes Memory Keeper?",
            accordianDetail:"Angel Wishes Memory Keeper is an online service designed to help individuals and families preserve, manage, and share important memories and documents related to end-of-life planning. Our platform provides secure storage for photos, videos, documents, and more, ensuring that your precious memories are safely preserved."
        },
        {
            accordianSummary:"Q: How do I sign up for Angel Wishes Memory Keeper?",
            accordianDetail:"Signing up is straightforward. Visit our sign-up page, fill in the required details to create your account, and you can start uploading and organizing your memories and documents immediately"
        },
        {
            accordianSummary:"Q: Is there a fee to use Angel Wishes Memory Keeper?",
            accordianDetail:"Yes, we offer several premium plans tailored to meet different needs. Each plan is designed to provide you with the necessary features and storage space required to manage and preserve your digital legacy effectively using our platform"
        },
        {
            accordianSummary:"Q: How do I upload documents and media?",
            accordianDetail:"To upload documents and media, log into your account and navigate to the 'Upload' section. Here, you can select files from your device to upload to your secure vault. We support various file formats for documents, photos, and videos."
        },
        {
            accordianSummary:"Q: Can I share the content with family and friends?",
            accordianDetail:"Absolutely! You can share your stored memories and documents with family and friends. Our platform includes controlled sharing options that let you specify who can view your content and which items they can access Security and privacy"
        },
        {
            accordianSummary:"Q: How secure is my information with Angel Wishes Memory Keeper?",
            accordianDetail:"We prioritize the security of your data. Our platform uses advanced encryption technologies to protect your information both in transit and at rest. Additionally, our servers are hosted in secure facilities with stringent access controls."
        },
        {
            accordianSummary:"Q: What happens to my data if I decide to close my account?",
            accordianDetail:"If you decide to close your account, all your data will be permanently deleted from our servers after a grace period, during which you can reactivate your account if you change your mind. We ensure that your information is completely removed to protect your privacy support"
        },
        {
            accordianSummary:"Q: How can I get support if I encounter problems or have questions?",
            accordianDetail:"Our dedicated support team is ready to assist you! You can reach out to us through our contact page, where you can send us a message or find our phone support details. We respond to all inquiries as quickly as possible.Additional Services"
        },
        {
            accordianSummary:"Q: Does Angel Wishes Memory Keeper offer any professional services like legal advice for estate planning?",
            accordianDetail:"While we do not provide legal advice directly, we partner with certified professionals in various fields, including legal and financial advisors, who can offer specialized services. You can access these services through referrals from your Angel Wishes account."
        },
        {
            accordianSummary:"Q: Can I access Angel Wishes Memory Keeper from anywhere?",
            accordianDetail:"Yes, our platform is accessible from any device with an internet connection, allowing you to access your documents and memories anytime, anywhere."
        },
    ]
  return (
    <div className='parent '>
        <div className='child-1  container p-5'>

       {faqsData?.map((item) =>{
        return(
            <div className='faqs-parrent'>
                 <Accordion className='rounded-3 my-3'>
        <AccordionSummary className='text-white rounded' style={{backgroundColor:"#21668E"}}
          expandIcon={icons.expandMoreIcons}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {item.accordianSummary}
        </AccordionSummary>
        <AccordionDetails>
         {item.accordianDetail}
        </AccordionDetails>
      </Accordion>

            </div>

        )
       })}
       <div>
       <p>
       For more information or further assistance, please feel free to contact us. We are committed to helping you preserve your most cherished memories and ensuring peace of mind for you and your family.
       </p>
       <Buttons  onClick={() => RoutFunction("/contact-us")}  text="Contact Us"style={{backgroundColor:"#FDB515"}} />
       </div>

      </div>

    </div>
  )
}
