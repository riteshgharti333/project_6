import "./Contact.scss";

import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { baseUrl } from "../../main";

import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/banner/contact-banner/67e772d0768539d1e12454a7`
  );
  return data;
};

const Contact = () => {
  const wordLimit = 150;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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

    const { name, email, phoneNumber, message } = formData;

    if (!name || !email || !phoneNumber || !message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${baseUrl}/contact/new-contact`,
        formData
      );

      if (data.result === 1) {
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("contact error:", error);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["contact-banner"],
    queryFn: fetchBanner,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isError) {
    if (error.name === "AxiosError") {
      const isNetworkError =
        !error.response ||
        error.message.includes("ECONNRESET") ||
        error.response?.data?.message === "read ECONNRESET";

      if (isNetworkError) {
        setTimeout(() => {
          toast.error("🚫 Network error. Please check your connection.");
        }, 100);
      } else {
        console.error("❗ Server Error:", error.response?.status);
      }
    }
  }

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <div className="error">
        <div className="error-desc">
          <h3>Failed to contact banner</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="contact-banner">
        <div className="img-wrapper">
          <img src={data?.image} alt="" />
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <h3>Get in touch</h3>

          <div className="contact-left-items">
            <div className="contact-left-item">
              <MdOutlineEmail className="contact-icon" />

              <p>Thenadskr@gmail.com</p>
            </div>

            <div className="contact-left-item">
              <LuPhoneCall className="contact-icon" />
              <p>08058866333</p>
            </div>
            <div className="contact-left-item">
              <MdOutlineLocationOn className="contact-icon" />

              <p>
                Railway Sta Rd, opp. Garg Hospital, near City Centre Mall, Ward
                No 35, Sakpura Mohlla, Radha Kishanpura, Sikar, Rajasthan 332001
              </p>
            </div>
          </div>

          <div className="follow">
            <h3>Follow Us</h3>

            <div className="follow-icons">
              <a
                href="https://www.facebook.com/thenadskr?rdid=g32zGxNSooqDf1YH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19bj6SHgR8%2F#"
                target="_blank"
              >
                <FaFacebookSquare className="follow-icon facebook" />
              </a>

              <a
                href="https://www.instagram.com/thenad.in?igsh=MWU3amN0dGdlZGh2YQ=="
                target="_blank"
              >
                <RiInstagramFill className="follow-icon insta" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h3>Send us a message</h3>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div class="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label for="name">Name</label>
              <div class="underline"></div>
            </div>

            <div class="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label for="email">Email</label>
              <div class="underline"></div>
            </div>

            <div class="form-group">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <label for="phone">Phone Number</label>

              <div class="underline"></div>
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
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.4146521451316!2d75.1470817!3d27.6116717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca55de1463785%3A0xfb9c65d2f6a4f15!2sNational%20Academy%20of%20Design!5e0!3m2!1sen!2sin!4v1743591625124!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
