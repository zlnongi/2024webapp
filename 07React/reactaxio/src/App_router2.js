import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutCompo from "./layout/LayoutCompo";
import HomeCompo from "./components/home/HomeCompo";
import AbouotCompo from "./components/AbouotCompo";
import ProductCompo from "./components/ProductCompo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutCompo />}>
        <Route index element={<HomeCompo />}></Route>
        <Route path="/about" element={<AbouotCompo />}></Route>
        <Route path="/products" element={<ProductCompo />}>
          <Route path=":id"></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
