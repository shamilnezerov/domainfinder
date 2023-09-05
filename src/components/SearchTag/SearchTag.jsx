import React from "react";
import styles from "./SearchTag.module.scss";

function SearchTag(props) {
  const { title, id } = props;

  return (
    <div className={styles.searchTag}>
      <div className={styles.main}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default SearchTag;
