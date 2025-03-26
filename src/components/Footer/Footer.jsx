import "./Footer.scss";
import logo from "../../assets/images/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { courses, footerCourse } from "../../assets/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="" />

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/share/p/1FSwuHsTm8/?mibextid=WC7FNe"
              target="_blank"
            >
              <FaFacebook className="footer-icon facebook" />
            </a>

            <a
              href="https://www.instagram.com/p/DGmowV8TTPv/?igsh=bzFnaW1xdG9zdW81"
              target="_blank"
            >
              <FaInstagram className="footer-icon insta" />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-center-items">
            <div className="footer-center-item">
              <IoCallSharp className="footer-center-icon" />
              <p>
                <a href="tel:+917011890082">+91 12345679</a>
              </p>
            </div>
            <div className="footer-center-item">
              <MdEmail className="footer-center-icon" />
              <p>johndoe123@gmail.com</p>
            </div>
            <div className="footer-center-item">
              <FaLocationDot className="footer-center-icon" />
              <p>east west USA - 110012</p>
            </div>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0524128176435!2d77.1493764!3d28.628191199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038fe22cbe27%3A0x7b234cd402107ba4!2sGlobal%20India%20Travels!5e0!3m2!1sen!2sin!4v1741773204877!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-right-item">
            <h3>Courses</h3>

            <ul className="course-footer">
              {footerCourse.map((item, index) => (
                <li key={index}>
                  <Link to={`${item.link}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-right-item">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/alumini"}> Alumini</Link>
              </li>
              <li>
                <Link to={"/admission"}>Admission</Link>
              </li>
              <li>
                <Link to={"/enquiry"}>Enquiry</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2025 InterNational Academy of Design. Designed and
          Developed by{" "}
          <a
            href="https://www.Wingstarnarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="star"
          >
            Star Marketing
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
