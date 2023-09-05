import React from "react";
import Styles from "./detail.module.scss";
import DomainInfo from "../../components/Elements/DomainInfo";
import SearchResultComp from "../../components/SearchResultComp/searchResultComp";
import SearchTag from "../../components/SearchTag/SearchTag";
const Detail = () => {
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
    <div className={Styles.main}>
      <div className={Styles.top}>
        <div className={Styles.left}>
          <div className={Styles.resiult}>
            <SearchResultComp />
          </div>
          <div className={Styles.domain}>
            <h3>Domain Registrar</h3>
            <a href="/">Godaddy</a>
          </div>
          <div className={Styles.details}>
            <DomainInfo />
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.rightComponent}>
            <h3>Tags</h3>
            <div className="d-flex flex-wrap mt-4">
              {data.map((data, index) => {
                return <SearchTag key={data.id} title={data.title} />;
              })}
            </div>
          </div>
          <div className={Styles.rightComponent}>
            <h3>Tags</h3>
            <div className="d-flex flex-wrap mt-4">
              {data.map((data, index) => {
                return <SearchTag key={data.id} title={data.title} />;
              })}
            </div>
          </div>
          <div className={Styles.rightComponent}>
            <h3>Tags</h3>
            <div className="d-flex flex-wrap mt-4">
              {data.map((data, index) => {
                return <SearchTag key={data.id} title={data.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.bottom}>
        <SearchResultComp />
        <SearchResultComp />
        <SearchResultComp />
      </div>
    </div>
  );
};

export default Detail;
