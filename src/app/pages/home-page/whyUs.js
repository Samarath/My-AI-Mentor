import HomeInfoSection from "@/components/home-info-section/HomeInfoSection";
import classes from "./home-page.module.scss";
import { WHY_CHOOSE_US } from "@/app/utils/static/Typography";

const WhyUs = () => {
  return (
    <div className={classes["wu-container"]}>
      <h2>Unlock Your Potential with Us </h2>
      <div className={classes["info-boxes"]}>
        {WHY_CHOOSE_US.map((item, i) => (
          <HomeInfoSection key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
