import "./Navbar.scss";

import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { RiHome2Line } from "react-icons/ri";
import {
  aboutOption,
  othercourse,
  pgCourse,
  ugCourse,
} from "../../assets/data";
import { baseUrl } from "../../main";
import axios from "axios";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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

  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
      {/* Navbar Left */}
      <Link to={"/"} className="navbar-left">
        <img src={logo} alt="Website Logo" loading="lazy" />
      </Link>

      <div className="mobile-menu">
        <MobileMenu />
      </div>

      <div className="navbar-center">
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : "home-tab"}
            >
              <RiHome2Line className="home-icon" /> Home
            </Link>
          </li>

          <li
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className="dropdonw-links"
          >
            About Us <MdOutlineKeyboardArrowDown className="nav-icon" />
            {dropdown && (
              <div className="nav-dropdown">
                {aboutOption.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.link}`}
                    className="dropdown-link"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
            className="dropdonw-links"
          >
            Courses <MdOutlineKeyboardArrowDown className="nav-icon" />
            {serviceDropdown && (
              <div className="nav-dropdown course-dropdown">
                <div className="course-dropdown-items">
                  <div className="course-dropdown-item">
                    <div className="course-links">
                      {mainCourses?.map((item, index) => (
                        <Link
                          key={index}
                          to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
                          className="course-link"
                        >
                          {item.bannerTitle}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="course-dropdown-item">
                    <h3>Under Graduate</h3>
                    <div className="course-links">
                      {ugCourses?.map((item, index) => (
                        <Link
                          key={index}
                          to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
                          className="course-link"
                        >
                          {item.bannerTitle}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="course-dropdown-item">
                    <h3>Post Graduate</h3>
                    <div className="course-links">
                      {pgCourses?.map((item, index) => (
                        <Link
                          key={index}
                          to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
                          className="course-link"
                        >
                          {item.bannerTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "active" : ""}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/alumini"
              className={location.pathname === "/alumini" ? "active" : ""}
            >
              Alumini
            </Link>
          </li>
          {/* <li>
            <Link
              to="/admission"
              className={location.pathname === "/admission" ? "active" : ""}
            >
              Admission
            </Link>
          </li> */}
          <li>
            <Link
              to="/enquiry"
              className={location.pathname === "/enquiry" ? "active" : ""}
            >
              Enquiry
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={location.pathname === "/contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
