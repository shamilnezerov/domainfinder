import React from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <NavLink to="/">DOMAINFINDER</NavLink>
      </div>
      <div className={styles.nav}>
        <NavLink to="/about">About us</NavLink>

        <NavLink to="/Searcharesult">For Developers</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </div>
  );
};

export default Header;
