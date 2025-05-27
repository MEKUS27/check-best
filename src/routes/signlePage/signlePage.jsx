import "./signlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import Chat from "../../components/chat/Chat";
import { RiHeartAdd2Line } from "react-icons/ri";
import { BsShareFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import Option from "../../components/option/option";



function SignlePage() {
  return (
    <>
      <div className="upper_detail">
        <div className="holder">
          <div className="left">
            <ul>
              <li>Home  <FaChevronRight /></li>
              <li>Shops for sale/rent in Ariaria <FaChevronRight /></li> 
              <li>Shops for sale/rent in Faulks Rd <FaChevronRight /></li> 
              <li>Aba Abia State</li> 
            </ul>
          </div>
          <div className="right">
           <Option />
          </div>
        </div>

      </div>

      <div className="signlePage">
        <div className="details">
          <div className="wrapper">
            <Slider images={singlePostData.images} />
            <div className="info">
            <h1>{singlePostData.title}</h1>

              <div className="top">
                <div className="post">
                <div className="price">₦ 2,000,000</div>

                  <div className="address">
                    <img src="/pin.png" alt="" />
                    <span>{singlePostData.address}</span>
                  </div>
                </div>
                {/* <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div> */}
              </div>
              <div className="bottom">
              
                <div>
                <div className="details">
                  <h3>Shop Details</h3>
                  <ul>
                    <li>Size: 230 Sqm in sqaure metters</li>
                    <li>Power/water supply</li>
                    <li>Parking space avaliablilty</li>
                    <li>Toilt avaliablilty</li>
                    <li>Accessibility (road access, wheelchair access, etc.)</li>
                    <li>Nearby landmark (close to bus stop, main market.)</li>
                  </ul>
                </div>

                <div className="details">
                  <h3>Shop Condition</h3>
                  <ul>
                    <li>Newly built</li>
                    <li>Ready to move in </li>
                  </ul>
                </div>
                </div>

                <div className="mapContainer">
                <Map items={[singlePostData]} />
              </div>
                

                {/* <h3>Description</h3>
              <p>{singlePostData.description}</p> */}
              </div>
            </div>
            <div className="wrapper">
                  <div>
                    <a href="/payment"><button className="rent">Rent Shop</button></a>
                  </div>
            </div>
          </div>
        </div>
        <div className="features">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default SignlePage;
