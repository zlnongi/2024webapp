import React from "react";
import NavCompo from "./NavCompo";
import { Outlet } from "react-router-dom";
import FooterCompo from "./FooterCompo";

function LayoutCompo() {
  return (
    <>
      <NavCompo />
      <Outlet />
      <FooterCompo />
    </>
  );
}

export default LayoutCompo;
