import "./About.scss";
import banner_img from "../../assets/images/homebanner.jpeg";
import { aboutContent, } from "../../assets/data";
import Founder from "../../components/Founder/Founder";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-content">
        {aboutContent.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
  <div className="about-member">
  <Founder />

  </div>
    </div>
  );
};

export default About;
