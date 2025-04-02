import "./Footer.scss";
import logo from "../../assets/images/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import {
  footerCourse,
  footerDropdown1,
  footerDropdown2,
} from "../../assets/data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerOption1, setFooterOption1] = useState(false);
  const [footerOption2, setFooterOption2] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setFooterOption1(false);
    setFooterOption2(false);
  }, [location]);

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
                <a href="tel:+917011890082">08058866333</a>
              </p>
            </div>
            <div className="footer-center-item">
              <MdEmail className="footer-center-icon" />
              <p>Thenadskr@gmail.com</p>
            </div>
            <div className="footer-center-item">
              <FaLocationDot className="footer-center-icon" />
              <p>
                Railway Sta Rd, opp. Garg Hospital, near City Centre Mall, Ward
                No 35, Sakpura Mohlla, Radha Kishanpura, Sikar, Rajasthan 332001
              </p>
            </div>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.4146521451316!2d75.1470817!3d27.6116717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca55de1463785%3A0xfb9c65d2f6a4f15!2sNational%20Academy%20of%20Design!5e0!3m2!1sen!2sin!4v1743591625124!5m2!1sen!2sin"
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
            <ul className="footer-dropdown">
              <li>
                <div
                  className="footer-dropdown-title"
                  onClick={() => setFooterOption1(!footerOption1)}
                >
                  UG ( Under Graduate) <MdOutlineKeyboardArrowRight />
                </div>

                {footerOption1 && (
                  <ul>
                    {footerDropdown1.map((item, index) => (
                      <Link
                        to={`${item.link}`}
                        key={index}
                        className="footer-option-link"
                      >
                        {" "}
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <div
                  className="footer-dropdown-title"
                  onClick={() => setFooterOption2(!footerOption2)}
                >
                  PG ( Post Graduate) <MdOutlineKeyboardArrowRight />
                </div>
                {footerOption2 && (
                  <ul>
                    {footerDropdown2.map((item, index) => (
                      <Link
                        to={`${item.link}`}
                        key={index}
                        className="footer-option-link"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
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
          Developed by&nbsp;
          <a
            href="https://www.Wingstarnarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="star"
          >
            Star Marketing
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
