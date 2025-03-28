import "./Homepage.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeContent from "../../components/HomeContent/HomeContent";
import OurPrograms from "../../components/OurPrograms/OurPrograms";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import SmallContent from "../../components/SmallContent/SmallContent";
import Certificate from "../../components/Certificate/Certificate";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />
      <HomeContent />
      {/* <OurServices />/ */}
      <OurPrograms />
      <ChooseUs />
      <SmallContent />
      <Certificate />
    </div>
  );
};

export default Homepage;
