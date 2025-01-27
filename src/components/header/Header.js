import PrimaryButton from "@/app/commons/buttons/PrimaryButton";
import classes from "./header.module.scss";
import Image from "next/image";
import logo from "../../app/assets/logo.png";

const Header = () => {
  return (
    <div className={classes["head-container"]}>
      <div className={classes["head-section-1"]}>
        <Image src={logo} alt="logo" width={50} height={50} />{" "}
        <span>AI Mentor</span>
      </div>
      <div className={classes["head-section-2"]}>
        <div className={classes["head-links"]}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes["login-button"]}>
          <PrimaryButton>Login</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
