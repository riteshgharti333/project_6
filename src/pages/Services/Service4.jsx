import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fashion } from "../../assets/serviceData";

const Service4 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="web-title">Web Design & Development</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
        <h2>Course overview</h2>
        <p>Immerse yourself in the world of UX/UI design with our Diploma in UX/UI Design. This program offers hands-on experience with industry-leading tools like Photoshop, Illustrator, Figma, and Adobe XD. Perfect for aspiring designers, tech enthusiasts, and creative minds, our course is designed to prepare you for a thriving career in UX/UI design. Join us to turn your creative ideas into professional digital experiences. With 87% of companies prioritizing user-friendly interfaces, your skills will be in high demand.</p>
        </div>
        <div className="service-content-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Service4;
