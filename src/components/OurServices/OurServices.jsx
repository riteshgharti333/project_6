import "./OurServices.scss";

import { courses } from "../../assets/data";

const OurServices = () => {
  return (
    <div className="ourServices">
      <div className="ourServices-top">
        <h1>Our Services</h1>
        <p>
          We provide comprehensive training in various disciplines, including:
        </p>
      </div>

      <div className="ourServices-cards">
        {courses.map((item, index) => (
          <div className="ourServices-card" key={index}>
            <div className="ourServices-card-img">
              <img src={item.img} alt="" loading="lazy" />
            </div>

            <div className="ourServices-card-desc">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
