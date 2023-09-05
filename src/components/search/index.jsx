import React from "react";
import caretDown from "../../assets/img/CaretDown.png";
import searchIcon from "../../assets/img/MagnifyingGlass.png";
import styles from "./search.module.scss";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className={styles.root}>
      {/*<div className="dropdown">*/}
      {/*  <button*/}
      {/*    className="btn  dropdown-toggle"*/}
      {/*    type="button"*/}
      {/*    id="dropdownMenuButton1"*/}
      {/*    data-bs-toggle="dropdown"*/}
      {/*    aria-expanded="false"*/}
      {/*  >*/}
      {/*    Resources*/}
      {/*  </button>*/}
      {/*  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">*/}
      {/*    <div className="form-check">*/}
      {/*      <label className="form-check-label" form="flexCheckDefault">*/}
      {/*        Default checkbox*/}
      {/*      </label>*/}
      {/*      <input*/}
      {/*        className="form-check-input"*/}
      {/*        type="checkbox"*/}
      {/*        value=""*/}
      {/*        id="flexCheckDefault"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="form-check">*/}
      {/*      <label className="form-check-label" form="flexCheckDefault">*/}
      {/*        Default checkbox*/}
      {/*      </label>*/}
      {/*      <input*/}
      {/*        className="form-check-input"*/}
      {/*        type="checkbox"*/}
      {/*        value=""*/}
      {/*        id="flexCheckDefault"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </ul>*/}
      {/*</div>*/}

      <div className={styles.resources}>
        <p>Resources</p>
        <img src={caretDown} alt="" />
      </div>
      <div className={styles.search}>
        <input
          className={styles.searchimp}
          type="text"
          placeholder="Search something..."
        />
        <Link to="/Searcharesult">
          <img className={styles.searchIcon} src={searchIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Search;
