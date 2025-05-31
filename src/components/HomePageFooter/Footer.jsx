import "./footer.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section about">
          <h3>CheckBest LTD</h3>
          <p>
            Building quality and affordable shops along Ariaria Market and Faulks Road, Aba.
            We’re committed to transforming the commercial experience for business owners.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt />Head Office: 175, AZIKIWE RD, ABA , ABIA.</p>
          <p><FaPhoneAlt /> +234 812 345 6789</p>
          <p><FaEnvelope /> support@checkbest.ng</p>
        </div>

        {/* Navigation */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/list">Available Shops</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Interest Form</a></li>
            <li><a href="/contact">Sign Up</a></li>
            
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CheckBest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
