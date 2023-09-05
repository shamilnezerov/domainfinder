import React from "react";
import styles from "./homeImeg.module.scss";
import img from "../../assets/img/Group 52.png";
import arrow from "../../assets/img/ic_Arrow Right.png";

const Index = () => {
  return (
    <div className="row">
      <div className={`${styles.homeImgRoot}`}>
        <div className={styles.homeBottom}>
          <div className={styles.homeLeft}>
            <div className={styles.leftItem}>
              <h2>Use Domain Finder to find unique domains!</h2>
              <p>
                Millions of people are searching for companies, domains, meta
                tags, company names and etc., on Domain finder. Try today! 1 000
                000 data for your search.
              </p>
            </div>
            <div className={styles.leftIcon}>
              <div className={styles.base}>
                <span>1</span>
              </div>
              <p>Type to search</p>
              <img src={arrow} alt="" />
              <div className={styles.base}>
                <span>2</span>
              </div>
              <p>Find domains</p> <img src={arrow} alt="" />
              <div className={styles.base}>
                <span>3</span>
              </div>
              <p>Filter them</p>
            </div>
          </div>
          <div className={styles.homeRight}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
