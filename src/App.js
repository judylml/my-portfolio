import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import EcoPantry from "./EcoPantry";
import ByteBroom from "./ByteBroom";
import Atlas from "./Atlas";
import Scarp from "./Scarp";
import About from "./About";
import Playground from "./Playground";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <HashRouter>
      {/* <div> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ecopantry" element={<EcoPantry />} />
          <Route path="/bytebroom" element={<ByteBroom />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/scarp" element={<Scarp />} />
          <Route path="/resume" element={<Portfolio />} />{" "}
          <Route path="/playground" element={<Playground />} />{" "}
          <Route path="/about" element={<About />} />{" "}
        </Routes>
        <Footer />
      {/* </div> */}
    </HashRouter>
  );
};

export default App;
