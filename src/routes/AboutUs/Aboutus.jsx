import './aboutus.scss';
import { SlLocationPin } from "react-icons/sl";
import { LuConstruction } from "react-icons/lu";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaBuildingShield } from "react-icons/fa6";




function Aboutus() {
  return (
    <div className="aboutus">
        <div className="image">
        <img src="/images/bg3.jpg" className="d-block w-100" alt="Shop construction" />
        </div>
    

      

      <div className="about-text">
        <h2>About CHECK-BEST INTERNATIONAL LTD</h2>
        <p>
          At <strong>CheckBest</strong>, we are dedicated to transforming the commercial landscape of <strong>Aba</strong>, with a special focus on the bustling and iconic <strong>Ariaria International Market</strong> and <strong>Faulks Road</strong>. We specialize in designing and constructing modern, secure, and affordable shops tailored to meet the growing needs of business owners, traders, and entrepreneurs.
        </p>

        <p>
          Our mission is simple: <strong>To provide durable, functional, and well-located shop spaces</strong> that empower businesses to thrive in one of Nigeria’s most dynamic trading hubs.
        </p>

        <p>
          With deep roots in <strong>Abia State</strong>, CheckBest understands the challenges and opportunities that come with doing business in Ariaria. That’s why we go beyond construction—we create shop units that combine convenience, aesthetics, and practicality.
        </p>
      </div>
      <div className="offer-section">
  <h2>What We Offer</h2>
  <ul className="offer-list">
    <li>
      <SlLocationPin />
      Strategically located shop buildings along <strong>Ariaria Market</strong> and <strong>Faulks Road</strong>
    </li>
    <li>
      <LuConstruction />
      Durable, quality construction with modern finishing
    </li>
    <li>
      <GiTakeMyMoney />
      Affordable pricing with flexible payment options
    </li>
    <li>
      <FaBuildingShield />
      Secure environments with proper ventilation and accessibility
    </li>
  </ul>
</div>

    </div>
  );
}

export default Aboutus;
