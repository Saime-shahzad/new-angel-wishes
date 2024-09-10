import React from "react";
import { CommonParagraph } from "../../assets/others/Others";

export const Legacies = () => {
  const legacyContent = [
    {
      headingText: "Do You Have a Loved One Who Has Passed Away?",
      paragraphText:
        "Losing someone special is never easy, and finding a way to honor their memory can be a comforting part of the healing process. At Angel Wishes Memory Keeper, we have created this special page for your angel, a place dedicated to remembering and celebrating those who have passed on. This space allows you to keep their stories alive, share cherished moments, and connect with others who understand the significance of loss and remembrance.",
    },
    {
      headingText: "Why This Page Matters",
      paragraphText:
        "Our Legacies page is more than just a space to share; it's a community of memory and legacy. Here, every story told, every picture shared, and every video posted serves as a lasting tribute to loved ones who, while no longer with us physically, continue to inspire and touch our lives. It's a place where memories are preserved, the past meets the present, and the essence of a loved one's spirit is kept vibrant and alive.",
    },
    {
        headingText: "Celebrate and Share the Stories That Matter Most",
        paragraphText: (
            <div>
          <p>
            At Angel Wishes Memory Keeper, we understand that everyone leaves
            behind a story that deserves to be told and cherished. Our Legacies
            page is a dedicated space where you can celebrate the lives of your
            loved ones who have passed away. Here, you can connect with others,
            share memories, and keep the spirit of your loved ones alive through
            stories, videos, and pictures.
          </p>
          <h5>How to Share Your Memories</h5>
          <p>
            This page is designed to be a comforting space to honor your loved
            ones by sharing the moments that meant the most. Here’s how you can
            contribute to the Legacies page:
          </p>
          <ol>
            <li>
              Post a Comment:Share your thoughts, stories, or memories in a
              written format, easily and respectfully.
            </li>
            <li>
              Upload a Video: Videos can capture the essence of moments better
              than anything else. Upload videos of your loved ones to share
              their life’s highlights
            </li>
            <li>
              Add Pictures:A picture is worth a thousand words. Upload
              photographs that celebrate the life of your loved one, from simple
              everyday joys to special occasions.
            </li>
          </ol>
        </div>
      ),
    },
    {
        headingText: "Guidelines for Posting",
        paragraphText: (
            <div>
          <h5>Maintaining a Respectful Community</h5>
          <p>
            To ensure that the Legacies page remains a supportive and respectful
            environment, please adhere to the following guidelines:
          </p>
          <ol>
            <li>
              Respect Privacy: Always respect the privacy of others. Ensure you
              can share a story, image, or video before posting.
            </li>
            <li>
              Be Kind and Courteous:We are all part of the same community.
              Please be supportive and kind in your interactions.
            </li>
            <li>
              No Inappropriate Content: Avoid posting anything that is offensive
              or inappropriate. Content that is disrespectful or harmful will be
              removed.
            </li>
          </ol>
        </div>
      ),
    },
    {
      headingText: "Explore the Legacies",
      paragraphText:
       <div>
        <h5>
        Read, Watch, and Connect
        </h5>
        <p>
        Browse through the posts, watch the videos, and view the images others have shared. Each entry is a window into a beautiful story that continues to inspire and touch lives even after someone has passed away.
        </p>
        <h5>
        Share Your Own Story
        </h5>
       </div>
    },
    {
        headingText: "Add to the Tapestry of Memories",
        paragraphText:
          "Ready to share your story or create a tribute to your loved one? Click the button below to begin. Your memories are precious, and sharing them can bring comfort and connection to others who understand what it means to cherish a legacy.",
      },
    {
        headingText: "Learn More About Creating a Legacy",
        paragraphText:
          <p>
            Preserving Memories with Angel Wishes Memory Keeper <br/>
            Want to learn more about how to preserve your memories or create a digital legacy? Visit our About Us page to understand more about our mission and the services we offer that can help you save every precious moment. <br/>
            The "Legacies" page is crafted to foster a community of remembrance and respect, providing users with the tools and space to celebrate the lives of those they have lost. This page offers a platform for sharing and connecting with others, ensuring that memories continue to live on and provide comfort and inspiration
          </p>
      },
    {
        headingText: "Commitment to Transparency and Integrity",
        paragraphText:
          <p>
            At Angel Wishes Memory Keeper, we are dedicated to transparency and integrity in all our operations. We appreciate your help maintaining the quality and safety of our services and your taking the time to report your concerns. <br/>
            This Report a Concern page is designed to facilitate an easy and efficient way for users to communicate issues, reinforcing Angel Wishes Memory Keeper's commitment to transparency, integrity, and responsive customer service. Clear instructions and direct communication options ensure that users feel supported and valued throughout the process.
          </p>
      },
  ];
  return (
    <div className="parent">
      <div className="child-1 container mt-5">
        {legacyContent?.map((item) => (
          <CommonParagraph
            paragraphText={item.paragraphText}
            headingText={item.headingText}
            style={{fontSize:"16px"}}
          />
        ))}
      </div>
    </div>
  );
};
