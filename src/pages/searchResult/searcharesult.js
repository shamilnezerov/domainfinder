import React from "react";
import SearchResultComp from "../../components/SearchResultComp/searchResultComp";
import "bootstrap/dist/css/bootstrap.css";
import Filters from "../../components/Elements/Filters";
import Stayles from "./searchResult.module.scss";
import Search from "../../components/search";
function Searcharesult(props) {
  return (
    <div className={Stayles.root}>
      <Search />
      <div className={Stayles.main}>
        <div className={Stayles.filter}>
          <p>Filters</p>
          <div className={Stayles.left}>
            <Filters />
          </div>
        </div>
        <div className={Stayles.top}>
          <div className="d-flex justify-content-between">
            <p>Showing: 599 filtered domains</p>
            <p>Sort by : Relevance</p>
          </div>

          <div className={Stayles.right}>
            <SearchResultComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searcharesult;
