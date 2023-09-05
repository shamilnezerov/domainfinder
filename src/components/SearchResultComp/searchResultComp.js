import React from "react";
import { useSelector } from "react-redux";
import styles from "./searchResultComp.module.scss";
import icon from "../../assets/img/ico.png";
import ricon from "../../assets/img/Alexa_Internet_logo 1.png";
import SearchTag from "../SearchTag/SearchTag";
import { Link } from "react-router-dom";
function SearchResultComp(props) {
  const myProducts = useSelector((state) => state.myProducts);

  const data = [
    {
      id: 1,
      title: "development",
    },
    {
      id: 2,
      title: "agile",
    },
    {
      id: 3,
      title: "design",
    },
    {
      id: 4,
      title: "finance",
    },
    {
      id: 5,
      title: "startup",
    },
    {
      id: 6,
      title: "delivery",
    },
  ];
  return (
    <Link to="/detail">
      {myProducts.map((product) => {
        const { id, title, description, url } = product;

        return (
          <div key={id} className={styles.searchResult}>
            <div className={styles.main}>
              <div className={styles.top}>
                <div className={styles.left}>
                  <div className={styles.icon}>
                    <img src={icon} alt="" />
                    <h3>Adobe</h3>
                  </div>
                  <div className={styles.link}>
                    <a href="https://www.adobe.com">{url}</a>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.rightlogo}>
                    <img src={ricon} alt="" />
                  </div>
                  <div className={styles.local}>
                    <h5>3.5</h5>
                    <p>Local rating</p>
                  </div>
                  <div className={styles.global}>
                    <h5>5.0</h5>
                    <p>Global rating</p>
                  </div>
                </div>
                {/*  <div className="title">
           </div>*/}
              </div>
              <hr />
              <div className={styles.bottom}>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className={styles.tag}>
                  {data.map((data, index) => {
                    return <SearchTag key={data.id} title={data.title} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Link>
  );
}

export default SearchResultComp;
