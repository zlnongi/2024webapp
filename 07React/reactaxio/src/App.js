import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import HomeCompo from "./components/home/HomeCompo";
import AbouotCompo from "./components/AbouotCompo";
import ProductCompo from "./components/ProductCompo";

function App() {
  return (
    <div>
      <nav>
        {/* <a href="/">home</a> a태그 쓰지말고 링크 써야함 !!!  */}
        <Link to="/">home</Link>
        {/* <a href="/about">about</a> */}
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <Link to="/products">products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeCompo />} />
        <Route path="/about" element={<AbouotCompo />} />
        <Route path="/products/:num" element={<ProductCompo />} />
      </Routes>
      <footer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ipsa.
      </footer>
    </div>
  );
}

export default App;
