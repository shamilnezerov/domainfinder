import styles from "./home.module.scss";
import React from "react";
import Search from "../../components/search";
import Index from "../../components/homeImg/index";
import SearchTag from "../../components/SearchTag/SearchTag";
const Home = () => {
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
    <div className={styles.homeRoot}>
      <div className={styles.title}>
        <h1 className={styles.titleH1}>
          Use Domain Finder to find unique domains!
        </h1>
        <p className={styles.titleP}>
          Millions of people are searching for companies, domains, meta tags,
          company names and etc., on Domain finder. Try today! 1 000 000 data
          for your search.
        </p>
      </div>
      <Search />

      <div className="d-flex justify-content-center mt-4">
        <div className={styles.SearchTagT}>
          <p>Top searches:</p>
        </div>
        {data.map((data, index) => {
          return <SearchTag key={data.id} title={data.title} />;
        })}
      </div>
      <Index />
    </div>
  );
};

export default Home;
