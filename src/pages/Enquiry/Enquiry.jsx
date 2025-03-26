import React, { useState } from "react";
import "./Enquiry.scss";
import { toast } from "react-hot-toast";

import banner_img from "../../assets/images/homebanner.jpeg";
import { formCourse, states } from "../../assets/data";

const Enquiry = () => {
  const [message, setMessage] = useState("");
  const wordLimit = 100;

  const handleChange = (e) => {
    const words = e.target.value.split(/\s+/).filter((word) => word !== "");
    if (words.length <= wordLimit) {
      setMessage(e.target.value);
    }
  };
  return (
    <div className="enquiry">
      <div className="enquiry-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>Enquiry</h1>
        </div>
      </div>

      <h1>InterNational Academy of Design</h1>

      <div className="enquiry-wrapper">
        <h2>Enquiry Form</h2>
        <p>Contact us for course information, admissions, and more.</p>
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
            <select name="" id="">
              <option value="">Select Profile</option>
              <option value="">10+2</option>
              <option value="">Under Graduate </option>
              <option value="">Post Graduate </option>
            </select>
          </div>

          <div class="form-group">
            <select name="" id="">
              <option value="">Select Course</option>
              {formCourse.map((item, index) => (
                <option key={index}>{item.name}</option>
              ))}
            </select>
          </div>

          <div class="form-group">
          <select name="state" id="state" required>
            <option value="">Select State</option>
            {states
              .sort((a, b) => a.localeCompare(b))
              .map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
          </div>

          <div class="form-group">
            <input type="text" id="name" name="name" required />
            <label for="name">City</label>
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
  );
};

export default Enquiry;
