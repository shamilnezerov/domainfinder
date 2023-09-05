import React from "react";
import styles from "./fotter.module.scss";
import LangComponent from "../../Elements/LangComponent";
import SocialIcons from "../../Elements/SocialIcons";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.main}>
        <div className={styles.left}>
          <div>
            <SocialIcons />
          </div>
          <div className={styles.title}>
            <a href="/" className="ms-5">
              Terms of Service
            </a>
            <a href="/" className="ms-5">
              Privacy Policy
            </a>
            <a href="/" className="ms-5">
              Trust & Safety
            </a>
          </div>
        </div>
        <div className={styles.lang}>
          <LangComponent />
        </div>
      </div>
    </div>
  );
}

export default Footer;
