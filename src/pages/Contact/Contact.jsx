import "./Contact.scss";

import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import banner_img from "../../assets/images/homebanner.jpeg";
import { useState } from "react";

const Contact = () => {

    const [message, setMessage] = useState("");
    const wordLimit = 150;
  
    const handleChange = (e) => {
      const words = e.target.value.split(/\s+/).filter((word) => word !== "");
      if (words.length <= wordLimit) {
        setMessage(e.target.value);
      }
    };

  return (
    <div className="contact">

      <div className="contact-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
        </div>
        <div className="contact-banner-desc">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us for any inquiries about admissions, courses, or
            campus life
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <h3>Get in touch</h3>

          <div className="contact-left-items">
            <div className="contact-left-item">
              <MdOutlineLocationOn className="contact-icon" />

              <p>East West, USA, 122800157</p>
            </div>

            <div className="contact-left-item">
              <MdOutlineEmail className="contact-icon" />

              <p>johndoe@gmail.com</p>
            </div>

            <div className="contact-left-item">
              <LuPhoneCall className="contact-icon" />
              <p>+91 8580483491</p>
            </div>
          </div>

          <div className="follow">
            <h3>Follow Us</h3>

            <div className="follow-icons">
              <FaFacebookSquare className="follow-icon facebook" />
              <RiInstagramFill className="follow-icon insta" />
              <FaLinkedin className="follow-icon linkedin" />
              <FaSquareXTwitter className="follow-icon twitter" />
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h3>Send us a message</h3>
          <form action="#" method="POST">
            <div class="form-group">
              <input type="text" id="name" name="name" required />
              <label for="name">Name</label>
              <div class="underline"></div>
            </div>

            <div class="form-group">
              <input type="email" id="email" name="email" required />
              <label for="email">Email</label>
              <div class="underline"></div>
            </div>

            <div class="form-group">
              <input type="tel" id="phone" name="phone" required />
              <label for="phone">Phone Number</label>

              <div class="underline"></div>
            </div>

            <div class="form-group">
            <textarea id="message" placeholder={`Message (Max ${wordLimit} words)`} name="message" rows="5" required></textarea>
          </div>

            <div class="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0524128176435!2d77.1493764!3d28.628191199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038fe22cbe27%3A0x7b234cd402107ba4!2sGlobal%20India%20Travels!5e0!3m2!1sen!2sin!4v1741773204877!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
