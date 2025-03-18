import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { mComProgram } from "../../../assets/courses";

const Pg2 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">M.Com</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{mComProgram.title}</h2>
          {mComProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{mComProgram.list.title}</h3>
          <p>{mComProgram.list.desc}</p>

          <ul>
            {mComProgram.list.listPoints.map((item, index) => (
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

export default Pg2;
