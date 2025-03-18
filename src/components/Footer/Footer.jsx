import "./Footer.scss";
import logo from "../../assets/images/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
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
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right-item">
          <h3>Our course</h3>
          <ul>
            <li> Architecture & Interior Design </li>
            <li>Web Design & Development </li>
            <li>Graphic Design </li>
            <li> UG ( Under Graduate)</li>
            <li> PG ( Post Graduate)</li>
          </ul>
        </div>

        <div className="footer-right-item">
          <h3>About</h3>
          <ul>
            <li>
              {" "}
              <Link to={"/about-us"}>About Us</Link>{" "}
            </li>
            <li>Founding Member </li>
            <li>Our Staff </li>
          </ul>
        </div>
        <div className="footer-right-item">
          <h3>Useful Links</h3>
          <ul>
            <li> Enquiry </li>
            <li>Placement </li>
            <li>Admission </li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
