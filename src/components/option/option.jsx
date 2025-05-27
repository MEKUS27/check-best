import { useState } from "react";
import "./option.scss";
import { RiHeartAdd2Line } from "react-icons/ri";
import { BsShareFill } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { IoLogoFacebook, IoLogoTwitter  } from "react-icons/io5";
// import {  } from "react-icons/io5";
import { HiLink } from "react-icons/hi";




function Option() {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => setShowShareOptions((prev) => !prev);

  const shareUrls = {
    whatsapp: "https://api.whatsapp.com/send?text=Check%20this%20out!",
    facebook: "https://www.facebook.com/sharer/sharer.php?u=https://yoururl.com",
    twitter: "https://twitter.com/intent/tweet?url=https://yoururl.com&text=Check%20this%20out!",
  };

  const copyLink = () => {
    navigator.clipboard.writeText("https://yoururl.com");
    alert("Link copied to clipboard!");
    setShowShareOptions(false);
  };

  return (
    <>
      <div className="option_right">
        <span><RiHeartAdd2Line /> Save to Favourites</span>
        <span onClick={toggleShareOptions}>
          <BsShareFill /> Share
        </span>
      </div>

      {showShareOptions && (
        <div className="share-modal-overlay" onClick={() => setShowShareOptions(false)}>
           
          <div className="share-modal" onClick={(e) => e.stopPropagation()}>
          <h2>Share this Shop with your
          friends and family</h2>
            <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer"><IoLogoFacebook /> Facebook</a>
            <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer"><IoLogoTwitter /> Twitter</a>
            <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer"><MdWhatsapp /> WhatsApp</a>
            <a href="http://localhost:5173/signlePage" onClick={copyLink}><HiLink /> Copy Link</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Option;
