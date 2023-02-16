
import React, { Component } from "react";

import SidebarMenu from "./SidebarMenu";

import logo from "assets/img/reactlogo.png";


function Sidebar({ color, image, routes }) {

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="#/"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/reactlogo.png")} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="#/">
            Adele React
          </a>
        </div>
        <SidebarMenu routes={routes} />
      </div>
    </div>
  );
}

export default Sidebar;
