import GraphIcon from "@/app/assets/svg-icon/GraphIcon";
import classes from "./footer.module.scss";
import Link from "next/link";
import YoutubeIcon from "@/app/assets/svg-icon/YoutubeIcon";
import LinkedinIcon from "@/app/assets/svg-icon/LinkedInIcon";
import InstagramIcon from "@/app/assets/svg-icon/InstagramIcon";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["social-icon"]}>
        <YoutubeIcon />
        <LinkedinIcon />
        <InstagramIcon />
      </div>
      <div className={classes["page-links"]}>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard">Blog</Link>
        <Link href="/dashboard">About</Link>
        <Link href="/dashboard">Contact</Link>
        <Link href="/dashboard">Our Terms</Link>
      </div>
      <div className={classes["copy-right"]}>
        <p>Copyright © 2025 AI Mentor® All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
