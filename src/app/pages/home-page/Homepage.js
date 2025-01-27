import HeroSection from "./HeroSection";
import classes from "./home-page.module.scss";
import WhyUs from "./whyUs";

const Homepage = () => {
  return (
    <div className={classes["home-container"]}>
      <HeroSection />
      <WhyUs />
    </div>
  );
};

export default Homepage;
