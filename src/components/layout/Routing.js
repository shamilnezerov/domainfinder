import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../../pages/home/index";
import Searcharesult from "../../pages/searchResult/searcharesult";
import About from "../../pages/about/about";
import Detail from "../../pages/detail/Detail";
import Admin from "../../pages/Admin";

const Routing = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/searcharesult" element={<Searcharesult />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Routing;
