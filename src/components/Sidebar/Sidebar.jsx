import { useState } from "react";
import { formCourse, states } from "../../assets/data";
import "./Sidebar.scss";

const Sidebar = () => {
  const [message, setMessage] = useState("");
  const wordLimit = 100;

  const handleChange = (e) => {
    const words = e.target.value.split(/\s+/).filter((word) => word !== "");
    if (words.length <= wordLimit) {
      setMessage(e.target.value);
    }
  };

  return (
    <sidebar className="sidebar">
      <form action="#" method="POST">
        <h1>Enrol Now</h1>

        {/* Name Field */}
        <div className="form-group">
          <input type="text" id="name" name="name" required />
          <label htmlFor="name">Name</label>
          <div className="underline"></div>
        </div>

        {/* Email Field */}
        <div className="form-group">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email</label>
          <div className="underline"></div>
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="phone">Phone Number</label>
          <div className="underline"></div>
        </div>

        {/* Profile Select */}
        <div className="form-group">
          <select name="profile" id="profile" required>
            <option value="">Select Profile</option>
            <option value="">10+2</option>
            <option value="">Under Graduate </option>
            <option value="">Post Graduate </option>
          </select>
        </div>

        {/* Course Select */}
        <div className="form-group">
          <select name="course" id="course" required>
            <option value="">Select Course</option>
            {formCourse.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Select */}
        <div className="form-group">
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

        {/* Message Textarea with Word Limit */}
        <div className="form-group">
          <textarea
            id="message"
            placeholder={`Message (Max ${wordLimit} words)`}
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </sidebar>
  );
};

export default Sidebar;
