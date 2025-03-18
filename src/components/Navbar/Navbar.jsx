import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  return (
    <div className="navbar">
      {/* Navbar Left */}
      <div className="navbar-left">
        <img src={logo} alt="Website Logo" />
      </div>

      <div className="mobile-menu">
        <MobileMenu />
      </div>

      {/* Navbar Center */}
      <div className="navbar-center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className="dropdonw-links"
          >
            About Us <MdOutlineKeyboardArrowDown className="nav-icon" />
            {dropdown && (
              <div className="nav-dropdown">
                <Link to="/about-us" className="dropdown-link">
                  About Us
                </Link>
                <Link to="/founding-member" className="dropdown-link">
                  Founding Member
                </Link>
                <Link to="/our-staff" className="dropdown-link">
                  Our Staff
                </Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
            className="dropdonw-links"
          >
            Our course <MdOutlineKeyboardArrowDown className="nav-icon" />
            {serviceDropdown && (
              <div className="nav-dropdown">
                <Link
                  to="/architecture-interior-design"
                  className="dropdown-link"
                >
                  Architecture & Interior Design
                </Link>
                <Link to="/web-design-development" className="dropdown-link">
                  Web Design & Development
                </Link>
                <Link to="/graphic-design" className="dropdown-link">
                  Graphic Design
                </Link>

                <Link to="/fashion-design" className="dropdown-link">
                  Fashion Design
                </Link>
                <Link to="/about-3" className="dropdown-link">
                  UG ( Under Graduate)
                </Link>

                <Link to="/about-3" className="dropdown-link">
                  PG ( Post Graduate)
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/enquiry">Enquiry</Link>
          </li>
          <li>
            <Link to="/admission"> Placement </Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="/admission">Gallery</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
