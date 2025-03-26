import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./MobileMenu.scss";
import { RiHome2Line } from "react-icons/ri";
import { aboutOption, courses } from "../../assets/data";

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
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="home-tab"
            >
              <RiHome2Line />
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
                {aboutOption.map((item, index) => (
                  <Link
                    to={`/${item.link}`}
                    onClick={() => setMenuOpen(false)}
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Our Courses Dropdown */}
          <li className="dropdown-links">
            <div
              onClick={() => setServiceDropdown(!serviceDropdown)}
              className="dropdown-title"
            >
              Courses <MdOutlineKeyboardArrowDown className="nav-icon" />
            </div>
            {serviceDropdown && (
              <div className="nav-dropdown">
                {courses.map((item, index) => (
                  <Link
                    to={`${item.link}`}
                    onClick={() => setMenuOpen(false)}
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/alumini" onClick={() => setMenuOpen(false)}>
            Alumini
            </Link>
          </li>
          <li>
            <Link to="/admission" onClick={() => setMenuOpen(false)}>
              Admission
            </Link>
          </li>

          <li>
            <Link to="/enquiry" onClick={() => setMenuOpen(false)}>
              Enquiry
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
