import "./HomeBanner.scss";
import home_banner from "../../assets/images/homebanner.jpeg";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="img-wrapper">
        <img src={home_banner} alt="Home Banner" />
      </div>
    </div>
  );
};

export default HomeBanner;
