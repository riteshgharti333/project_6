import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./MobileMenu.scss";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  // Reference for the menu container
  const menuRef = useRef(null);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="mobileMenu" ref={menuRef}>
      {/* Hamburger Menu */}
      <label className="hamburger">
        <input
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <svg viewBox="0 0 32 32" className="hamburger__icon">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>

      {/* Mobile Menu */}
      <div className={`mobileMenu-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li className="dropdown-links">
            <div
              onClick={() => setDropdown(!dropdown)}
              className="dropdown-title"
            >
              About Us <MdOutlineKeyboardArrowDown className="nav-icon" />
            </div>
            {dropdown && (
              <div className="nav-dropdown">
                <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/founding-member" onClick={() => setMenuOpen(false)}>
                  Founding Member
                </Link>
                <Link to="/our-staff" onClick={() => setMenuOpen(false)}>
                  Our Staff
                </Link>
              </div>
            )}
          </li>

          {/* Our Courses Dropdown */}
          <li className="dropdown-links">
            <div
              onClick={() => setServiceDropdown(!serviceDropdown)}
              className="dropdown-title"
            >
              Our Courses <MdOutlineKeyboardArrowDown className="nav-icon" />
            </div>
            {serviceDropdown && (
              <div className="nav-dropdown">
                <Link to="/architecture-interior-design" onClick={() => setMenuOpen(false)}>
                  Architecture & Interior Design
                </Link>
                <Link to="/web-design-development" onClick={() => setMenuOpen(false)}>
                  Web Design & Development
                </Link>
                <Link to="/graphic-design" onClick={() => setMenuOpen(false)}>
                  Graphic Design
                </Link>
                <Link to="/fashion-design" onClick={() => setMenuOpen(false)}>
                  Fashion Design
                </Link>
                <Link to="/undergraduate-courses" onClick={() => setMenuOpen(false)}>
                  UG (Under Graduate)
                </Link>
                <Link to="/postgraduate-courses" onClick={() => setMenuOpen(false)}>
                  PG (Post Graduate)
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/enquiry" onClick={() => setMenuOpen(false)}>
              Enquiry
            </Link>
          </li>
          <li>
            <Link to="/admission" onClick={() => setMenuOpen(false)}>
              Placement
            </Link>
          </li>
          <li>
            <Link to="/admission" onClick={() => setMenuOpen(false)}>
              Admission
            </Link>
          </li>
          <li>
            <Link to="/admission" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
