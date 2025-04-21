import "./Sidebar.scss";
import { formCourse, states } from "../../assets/data";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../main";
import { toast } from "sonner";

const Enquiry = () => {
  const wordLimit = 100;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profile: "",
    selectCourse: "",
    selectState: "",
    district: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      const words = value.split(/\s+/).filter((word) => word !== "");
      if (words.length > wordLimit) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phoneNumber,
      profile,
      selectCourse,
      selectState,
      district,
      city,
      message,
    } = formData;

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !profile ||
      !selectCourse ||
      !selectState ||
      !district ||
      !city ||
      !message
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${baseUrl}/enquiry/new-enquiry`,
        formData,
      );

      if (data.result === 1) {
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          profile: "",
          selectCourse: "",
          selectState: "",
          district: "",
          city: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Admission submission error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit} method="POST">
        <h1>Enquiry</h1>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
          <div className="underline"></div>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <div className="underline"></div>
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="underline"></div>
        </div>

        <div className="form-group">
          <select
            name="profile"
            id="profile"
            value={formData.profile}
            onChange={handleChange}
            required
          >
            <option value="">Select Profile</option>
            <option value="10+2">10+2</option>
            <option value="Under Graduate">Under Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
        </div>

        <div className="form-group">
          <select
            name="selectCourse"
            id="course"
            value={formData.selectCourse}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            {formCourse.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <select
            name="selectState"
            id="state"
            value={formData.selectState}
            onChange={handleChange}
            required
          >
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

        <div className="form-group">
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
          <label htmlFor="district">District</label>
          <div className="underline"></div>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <label htmlFor="city">City</label>
          <div className="underline"></div>
        </div>

        <div class="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={`Message (Max ${wordLimit} words)`}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;
