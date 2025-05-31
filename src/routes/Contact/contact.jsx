import Chat from "../../components/chat/Chat";
import "./contact.scss";
import { FaWhatsappSquare } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import Footer from "../../components/HomePageFooter/Footer";

function ContactAdmin() {
  return (
   <>
     <div className="contact-admin">
      <div className="contact-header">
        <h2>Contact CheckBest Admin</h2>
        <p>
          If you have any questions, issues, or requests, feel free to reach out
          to us below.
        </p>
      </div>
      

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <Chat />
        </div>

        {/* Admin Contact Info */}
        <div className="contact-info">
          <h3>Admin Contact Info</h3>

          <div className="info-item">
            <FaSquarePhone />
            <a href="tel:+2348147618725">Contact via Phone Call</a>
          </div>

          <div className="info-item">
            <MdMarkEmailRead />
            <a href="mailto:vorji325@gmail.com">admin@checkbest.com</a>
          </div>

          <div className="info-item">
            <GiOfficeChair />
            <span>Head Office: 175, AZIKIWE RD, ABA , ABIA.</span>
          </div>

          <div className="info-item">
            <FaWhatsappSquare />
            <a
              href="https://wa.me/2348147618725"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="info-item">
            <div>
                <strong>Need Assistance or Have Questions?</strong> 
       <p> Our admin team is here to help you! Whether you're interested in our shop buildings, 
       have a business inquiry, or need more information, feel free to reach out.</p>
        
        <p>We’re always just a call, message, or email away — and ready 
            to support your journey with CheckBest.</p>
        </div>
          </div>
          
        </div>
        
        

      
      </div>
    </div>

    <Footer />
   </>
    
  );
}

export default ContactAdmin;
