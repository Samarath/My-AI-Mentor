import Image from "next/image";
import classes from "./home-page.module.scss";
import hero_img from "../../../app/assets/hero.webp";
import PrimaryButton from "@/app/commons/buttons/PrimaryButton";
import SecondaryButton from "@/app/commons/buttons/SecondaryButton";

const HeroSection = () => {
  return (
    <div className={classes["hero-section"]}>
      <div className={classes["hero-content-section"]}>
        <div className={classes["head"]}>
          <h1>Your Personal AI Career Mentor</h1>
          <p className={classes["head-text"]}>
            Empowering your career growth with personalized skill roadmaps and
            actionable milestones. Start your journey to success today.
          </p>
          <p className={classes["head-text"]}>
            With AI-driven insights, tailored guidance, and interactive
            roadmaps, we&lsquo;ll help you navigate your career path and unlock
            new opportunities. Let&lsquo;s build your future together.
          </p>
        </div>
        <div className={classes["action-center"]}>
          <PrimaryButton className={classes["primary-button"]}>
            Start Now
          </PrimaryButton>
          <SecondaryButton className={classes["secondary-button"]}>
            Learn more
          </SecondaryButton>
        </div>
      </div>
      <div className={classes["hero-img-section"]}>
        <Image
          alt="hero-image"
          src={hero_img}
          fill
          className={classes["image"]}
          unoptimized
        />
      </div>
    </div>
  );
};

export default HeroSection;
