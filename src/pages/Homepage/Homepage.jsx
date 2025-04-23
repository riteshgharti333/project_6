import "./Homepage.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeContent from "../../components/HomeContent/HomeContent";
import OurPrograms from "../../components/OurPrograms/OurPrograms";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import SmallContent from "../../components/SmallContent/SmallContent";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />
      <HomeContent />
      {/* <OurServices />/ */}
      <OurPrograms />
      <ChooseUs />
      <SmallContent />

    </div>
  );
};

export default Homepage;
