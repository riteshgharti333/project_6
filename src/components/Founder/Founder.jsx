import "./Founder.scss";
import founder_img from "../../assets/images/founder.png";

const Founder = () => {
  return (
    <div className="founder">
      <h1>Chair Person</h1>
      <img src={founder_img} alt="Founder Image" />
      <h3>Sumit Kumar</h3>
    </div>
  );
};

export default Founder;
