import "./Homepage.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeContent from "../../components/HomeContent/HomeContent";
import OurServices from "../../components/OurServices/OurServices";
import OurPrograms from "../../components/OurPrograms/OurPrograms";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Founder from "../../components/Founder/Founder";
import SmallContent from "../../components/SmallContent/SmallContent";

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
