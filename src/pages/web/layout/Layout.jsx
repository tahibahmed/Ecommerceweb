import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/header";

const Layout = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
