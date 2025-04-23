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
import axios from "axios";
import { baseUrl } from "../../main";

const Footer = () => {
  const [footerOption1, setFooterOption1] = useState(false);
  const [footerOption2, setFooterOption2] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setFooterOption1(false);
    setFooterOption2(false);
  }, [location]);

  const [mainCourses, setMainCourses] = useState([]);
  const [ugCourses, setUgCourses] = useState([]);
  const [pgCourses, setPgCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/course/all-course`);
        const allCourses = data?.courses || [];

        setMainCourses(
          allCourses.filter((course) => course.courseType === "Main Course")
        );
        setUgCourses(
          allCourses.filter((course) => course.courseType === "UG Course")
        );
        setPgCourses(
          allCourses.filter((course) => course.courseType === "PG Course")
        );
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Destination coordinates: National Academy of Design (Sikar)
          const destinationLat = 27.6116717;
          const destinationLng = 75.1470817;

          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

          window.open(mapsUrl, "_blank");
        },
        (error) => {
          toast.error("Please allow location access to get directions.");
        }
      );
    } else {
      toast.error("Geolocation not supported on this browser.");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="" />

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/thenadskr?rdid=g32zGxNSooqDf1YH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19bj6SHgR8%2F#"
              target="_blank"
            >
              <FaFacebook className="footer-icon facebook" />
            </a>

            <a
              href="https://www.instagram.com/thenad.in?igsh=MWU3amN0dGdlZGh2YQ=="
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

              <button
                className="get-direction-btn"
                onClick={handleGetDirections}
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-right-item">
            <h3>Courses</h3>

            <ul className="course-footer">
              {mainCourses?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
                  >
                    {item.bannerTitle}
                  </Link>
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
                    {ugCourses?.map((item, index) => (
                      <Link
                        to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
                        key={index}
                      >
                        {item.bannerTitle}
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
                    {pgCourses.map((item, index) => (
                      <Link
                        to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
                        key={index}
                      >
                        {item.bannerTitle}
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
              <li>
                <Link to={"/student-corner"}>Student Login</Link>
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
