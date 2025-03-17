import "./ChooseUs.scss";
import svg_icon from "../../assets/images/svg-image/svg1.svg";
import { chooseUs } from "../../assets/data";

const ChooseUs = () => {
  return (
    <div className="chooseUs">
      <div className="chooseUs-top">
        <h1>Why Choose Us?</h1>
        <p>
          At International Academy of Design, we strive to shape the future of
          aspiring designers, providing them with the tools they need to succeed
          in their careers. Join us today and take the first step towards a
          creative and fulfilling future!
        </p>
      </div>

      <div className="chooseUs-cards">
        {chooseUs.map((item, index) => (
          <div className="chooseUs-card" key={index}>
            <div className="chooseUs-cards-left">
              <img src={item.img} alt="" />
            </div>
            <div className="chooseUs-cards-center">
              <span>{item.no}</span>
            </div>
            <div className="chooseUs-cards-right">
              <h3>{item.tilte}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
