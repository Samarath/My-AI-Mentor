import GraphIcon from "@/app/assets/svg-icon/GraphIcon";
import classes from "./home-info-section.module.scss";
import LightBulbIcon from "@/app/assets/svg-icon/LightBulbIcon";
import TimelineIcon from "@/app/assets/svg-icon/TimelineIcon";

const HomeInfoSection = ({ data }) => {
  return (
    <div className={classes["info-container"]}>
      <div>
        <div className={classes["img"]}>{data.icon}</div>

        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default HomeInfoSection;
