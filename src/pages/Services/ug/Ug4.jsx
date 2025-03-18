import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { bbaProgram } from "../../../assets/courses";

const Ug4 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title"> B.B.A</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{bbaProgram.title}</h2>
          {bbaProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{bbaProgram.list.title}</h3>
          <p>{bbaProgram.list.desc}</p>

          <ul>
            {bbaProgram.list.listPoints.map((item, index) => (
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

export default Ug4;
