import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./card.scss";
import { FaStar, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFire } from "react-icons/fa";


import { BsBookmarkHeart } from "react-icons/bs";

function Card({ item }) {
  const [mainImage, setMainImage] = useState(item.img);
  const [selectedImage, setSelectedImage] = useState(item.img);

  // Optional: If item.img ever changes, update state
  useEffect(() => {
    setMainImage(item.img);
  }, [item.img]);

  return (
    <div className="property-card">
      <div className="image-section">
        <Link to="/:id" className="img_link">
        <img src={mainImage} alt={item.title} className="main-image" />
        </Link>
        <span className="badge must-see">* Must See</span>

        <div className="thumbnails">
          {item.images?.length > 0 ? (
            item.images.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => {
                  setMainImage(img);
                  setSelectedImage(img);
                }}
              />
            ))
          ) : (
            <span className="no-images"></span>
          )}
        </div>
      </div>

      <div className="info-section">
        <div className="header">
          <div className="left">
            <h2>
              <Link to={`/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="location">
              {" "}
              <img src="/pin.png" alt="" /> {item.address}
            </p>
            {/* <p className="description">{item.description}</p> */}
          </div>
          <div className="right">
            <span>
              {" "}
              <p className="price">₦ {item.price.toLocaleString()}</p>
            </span>
            <p>SID : 2MKHX</p>
            <div className="heart">
              <BsBookmarkHeart />
            </div>

            

            {/* <div className="sponsored-badge">Sponsored <FaFire /></div> */}
            {/* <div className="actions">
              <button className="btn call">
                <a className="" href="tel:+2348147618725">
                  <FaPhoneAlt />  call
                </a>
              </button>
              <button className="btn whatsapp">
                <a href="https://wa.me/2348147618725" target="_blank" rel="noopener noreferrer">
                  <IoLogoWhatsapp /> Whatsapp
                </a>
              </button>
            </div> */}
          </div>
        </div>

        <div className="new-listing">
          <ul>
            <li>
              {" "}
              <img src="/star.svg" alt="" />
              Serviced
            </li>
            <li>
              {" "}
              <img src="/star.svg" alt="" />
              Newly bulit
            </li>
            <li className="last">Only on checkbest</li>
          </ul>
        </div>

        {/* <div className="condition">

          </div> */}

      

        {/* <div className="features">
          <span>
            <p>Size:</p> {item.size} sqft
          </span>
        </div>

        <div className="features">
          <span>
            <p>latitude:</p> {item.latitude}
          </span>
        </div>

        <div className="features">
          <span>
            <p>longitude:</p> {item.longitude}
          </span>
        </div> */}
      </div>
      
    </div>
  );
}

export default Card;
