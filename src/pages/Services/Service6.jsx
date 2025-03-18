import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { pg, postgraduate } from "../../assets/serviceData";
import { Link } from "react-router-dom";

const course_img =
  "https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png";

const Service6 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>postgraduate</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{postgraduate.title}</h2>
          {postgraduate.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{postgraduate.list.title}</h3>
          <p>{postgraduate.list.desc}</p>

          <div className="service-content-cards">
            {pg.map((item, index) => (
              <Link to={`/${item.link}`} key={index}>
                <div className="service-content-card">
                  <img src={course_img} alt="" />
                  <h4>{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="service-content-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Service6;
