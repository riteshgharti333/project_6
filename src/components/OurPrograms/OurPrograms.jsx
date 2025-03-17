import "./OurPrograms.scss";
import { programs } from "../../assets/data";

const OurPrograms = () => {
  return (
    <div className="ourPrograms">
      {programs.map((item, index) => (
        <div className="programs" key={index}>
          <div className="ourPrograms-top">
            <h1>{item.title}</h1>
          </div>

          <div className="ourPrograms-cards">
            {item.courses.map((item, index) => (
              <div
                className="ourPrograms-card"
                key={item}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="ourPrograms-card-desc">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurPrograms;
