import "./Placement.scss";

import banner_img from "../../assets/images/homebanner.jpeg";

const student =
  "https://www.euroschoolindia.com/wp-content/uploads/2023/10/Brown-university-admission-jpg.webp";

const Placement = () => {
  return (
    <div className="placement">
      <div className="placement-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>Placements</h1>
        </div>
      </div>

      <div className="placement-content">
        <h2>Meet Our Achievers: Students Placed at Top Companies</h2>
        <div className="placement-cards">
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>{" "}
          <div className="placement-card">
            <img src={student} alt="" />
            <div className="placement-card-desc">
              <p>John Doe</p>
              <h3 className="placed">Placed at Amazon</h3>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
