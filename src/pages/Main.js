import React from "react";
import "./Main.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Center from "../components/Center";

const Main = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="item1">
          <NavBar />
        </div>
        <div className="item2">
          <SideBar />
        </div>
        <div className="item3">
          <Center />
        </div>
      </div>
    </div>
  );
};

export default Main;
