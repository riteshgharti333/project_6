import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { mbaProgram } from "../../../assets/courses";

const Pg4 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>M.B.A</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{mbaProgram.title}</h2>
          {mbaProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{mbaProgram.list.title}</h3>
          <p>{mbaProgram.list.desc}</p>

          <ul>
            {mbaProgram.list.listPoints.map((item, index) => (
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

export default Pg4;
