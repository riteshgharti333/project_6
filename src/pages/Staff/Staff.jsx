import "./Staff.scss";
import staff_banner from "../../assets/images/staff.jpg";

import { TiLocationArrow } from "react-icons/ti";
import { staffs } from "../../assets/data";

const Staff = () => {
  return (
    <div className="staff">
      <div className="staff-banner">
        <img src={staff_banner} alt="" />
      </div>

      <div className="staff-container">
        <h1>Our Staff</h1>

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
