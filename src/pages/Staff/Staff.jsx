import "./Staff.scss";

import { TiLocationArrow } from "react-icons/ti";
import { staffs } from "../../assets/data";
import banner_img from "../../assets/images/homebanner.jpeg";

const Staff = () => {
  return (
    <div className="staff">
      <div className="staff-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>Our Staff</h1>
        </div>
      </div>

      <div className="staff-container">
        <div className="staff-cards">
          {staffs.map((item, index) => (
            <div className="staff-card" key={index}>
              <img src={item.img} alt="" />
              <div className="staff-card-desc">
                <h3>{item.name}</h3>
                <p>{item.title} </p>
                <p>
                  {item.location} <TiLocationArrow className="staff-icon" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
