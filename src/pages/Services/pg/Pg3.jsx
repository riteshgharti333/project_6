import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { mScProgram } from "../../../assets/courses";

const Pg3 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">M.Sc</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{mScProgram.title}</h2>
          {mScProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{mScProgram.list.title}</h3>
          <p>{mScProgram.list.desc}</p>

          <ul>
            {mScProgram.list.listPoints.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
                <br />
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
        <div className="service-content-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Pg3;
