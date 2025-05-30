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
            <div className="DF">
            <div className="info">
            <h1>{singlePostData.title}</h1>

              <div className="top">
                <div className="post">
                <div className="price">₦ 2,000,000</div>

                  <div className="address">
                    <img src="/pin.png" alt="" />
                    <span>{singlePostData.address}</span>
                  </div>
                  <h3 className="description_head">Description</h3>
              <p className="description_detail">{singlePostData.description}</p>
                </div>
                {/* <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div> */}
              </div>
              <div className="bottom">
              
                <div>
                <div className="shopdetails">
                  <h3>Shop Details:</h3>
                  <ul>
                    <li> 2 (sqm) sqaure metters</li>
                    <li>Power/water supply</li>
                    <li>Parking space avaliablilty</li>
                    <li>Toilt avaliablilty</li>
                    <li>Accessibility: (road access, wheelchair access, etc.)</li>
                    <li>Nearby landmark: (close to bus stop, main market)</li>
                  </ul>
                </div>

                <div className="shopdetails">
                  <h3>Shop Condition:</h3>
                  <ul>
                    <li>Newly built</li>
                    <li>Furnished</li>
                    <li>Serviced</li>
                    <li>Ready to move in </li>
                  </ul>
                </div>
                </div>

                <div className="mapContainer">
                <Map items={[singlePostData]} />
              </div>
                

                
              </div>
              
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
          {/* <Chat /> */}
          <div className="avaliable">
            <h1>Available Shops</h1>
            <div>
              <p className="first_p">Currently available ongoing Shops below, For Sale</p>
            </div>
            <div className="avlist-header">
                <h2>Shop Type (SQM)</h2>
                <h2>Shop Count</h2>
            </div>
            <div className="list">
                 <ul>
                  <li>12 Square Metter</li>
                  <li>1944</li>
                 </ul>
            </div>
            <div className="list">
                 <ul>
                  <li>16 Square Metter</li>
                  <li>210</li>
                 </ul>
            </div>
            <div className="list">
                 <ul>
                  <li>20 Square Metter</li>
                  <li>32</li>
                 </ul>
            </div>
            <div className="list">
                 <ul>
                  <li>60 Square Metter</li>
                  <li>16</li>
                 </ul>
            </div>
            <div className="list">
                 <ul>
                  <li>35 Square Metter</li>
                  <li>6</li>
                 </ul>
            </div>
            <div className="list">
                 <ul>
                  <li>50 Square Metter</li>
                  <li>4</li>
                 </ul>
            </div>
            <div className="list">
                 <ul>
                  <li>2 Square Metter</li>
                  <li>15</li>
                 </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignlePage;
