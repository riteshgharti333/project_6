import "./About.scss";

import { aboutContent } from "../../assets/data";
import Founder from "../../components/Founder/Founder";
import founder_img from "../../assets/images/founder.png";

import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/banner/about-banner/67e7720bf86def3cbf7ba215`
  );
  return data;
};

const About = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["about-banner"],
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
          <h3>Failed to about banner</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="about">
      <div className="about-banner">
        <div className="img-wrapper">
          <img src={data.image} alt="" loading="lazy" />
          <h1>About Us</h1>
        </div>
      </div>

      <div className="about-content">
        <div className="about-content-left">
          <div className="about-content-right-desc">
            <p>
              At InterNational Academy of Design, we believe in the power of
              creativity and innovation to transform lives.
            </p>
            <p>
              As a premier institution, we are committed to nurturing talent and
              equipping students with the skills needed to excel in the
              ever-evolving world of design. Our academy serves as a hub for
              aspiring designers, providing them with a platform to explore,
              create, and innovate.
            </p>
          </div>

          <div className="about-content-right">
            <img src={founder_img} alt="" />
            <p>
              {" "}
              <span>Sumit Kumar</span> <span>Founder</span>
            </p>
          </div>
        </div>

        <p>
          With a strong focus on quality education, we offer a dynamic learning
          environment that encourages artistic expression and technical
          expertise. Our experienced faculty members bring industry insights
          into the classroom, ensuring that students receive hands-on training
          that aligns with global standards. We emphasize both theoretical
          knowledge and practical applications, enabling our students to develop
          a well-rounded skill set.
        </p>
        <p>
          At the heart of our academy is a commitment to fostering a culture of
          excellence. We believe that design is more than just aesthetics—it is
          a powerful tool for problem-solving and communication. Our curriculum
          is carefully designed to inspire critical thinking, creativity, and
          innovation, preparing students to meet the demands of the industry
          with confidence.
        </p>
        <p>
          We take pride in our state-of-the-art facilities and a learning
          environment that promotes collaboration and exploration. Our students
          have access to modern design studios, advanced technology, and
          industry-relevant resources that empower them to bring their ideas to
          life. We continuously adapt to the latest trends and advancements to
          ensure our students stay ahead in their fields.
        </p>
        <p>
          Beyond academics, we are dedicated to shaping well-rounded
          professionals ready to make an impact. Through industry partnerships,
          workshops, and real-world projects, we provide our students with
          invaluable exposure and networking opportunities. Our goal is to
          bridge the gap between education and professional success, helping our
          graduates secure rewarding careers.
        </p>
        <p>
          At InterNational Academy of Design, we don’t just teach design—we
          inspire the designers of tomorrow. Join us on this creative journey
          and unlock your potential in a world where innovation knows no bounds.
        </p>
      </div>
      {/* <div className="about-member">
        <Founder />
      </div> */}
    </div>
  );
};

export default About;
