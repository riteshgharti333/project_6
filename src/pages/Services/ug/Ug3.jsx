import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { bScProgram } from "../../../assets/courses";

const Ug3 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>B.Sc</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{bScProgram.title}</h2>
          {bScProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{bScProgram.list.title}</h3>
          <p>{bScProgram.list.desc}</p>

          <ul>
            {bScProgram.list.listPoints.map((item, index) => (
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

export default Ug3;
