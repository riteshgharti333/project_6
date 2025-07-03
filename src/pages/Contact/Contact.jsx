import "./Contact.scss";

import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { baseUrl } from "../../main";

import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import useFullUrl from "../../utils/useFullUrl";
import SEO from "../../components/SEO/SEO";

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
  const fullUrl = useFullUrl();

  const [contactDetailData, setContactDetailData] = useState({});

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/contact-details/only`);
        console.log(data);
        if (data && data?.success) {
          setContactDetailData(data.contact);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
        toast.err(error.response.data.message);
      }
    };

    fetchContactDetails();
  }, []);

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
        toast.success("Contact submitted");
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
          <h3>Failed to load contact banner</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

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
    <div className="contact">
      <SEO
        title="Contact Us | International Academy of Design – Reach Out for Admissions & Support"
        description="Contact International Academy of Design for admissions inquiries, course information, campus visits, and student support. We're here to help you shape your creative future."
        keywords="International Academy of Design contact, admissions support, design institute contact info, campus visit, student help, design course inquiries"
        url={fullUrl}
      />

      <div className="contact-banner">
        <div className="img-wrapper">
          <img src={data?.image} alt="" loading="lazy" />
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <h3>Get in touch</h3>

          <div className="contact-left-items">
            <div className="contact-left-item">
              <MdOutlineEmail className="contact-icon" />

              <p>{contactDetailData.email}</p>
            </div>

            <div className="contact-left-item">
              <LuPhoneCall className="contact-icon" />
              <p>{contactDetailData.phoneNumber}</p>
            </div>
            <div className="contact-left-item">
              <MdOutlineLocationOn className="contact-icon" />

              <p>{contactDetailData.address}</p>
            </div>
          </div>

          <div className="follow">
            <h3>Follow Us</h3>

            <div className="follow-icons">
              <a href={contactDetailData.facebookLink} target="_blank">
                <FaFacebookSquare className="follow-icon facebook" />
              </a>

              <a href={contactDetailData.instagramLink} target="_blank">
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

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button className="get-direction-btn" onClick={handleGetDirections}>
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
