import React, { Component } from "react";
import logo_image from "../images/home_World_Map.jpg";
import NetlifyAuth from "../components/NetlifyAuth.js";

import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div class="container">
        <logo scrolled={"scrolled"} navigationStyle={"navigationStyle"} />
        <ul className="nav navbar-nav">
          <li>
            <NetlifyAuth />
          </li>
        </ul>
        <searchIcon toggleSearch={"toggleSearch"} />
        <ul className="nav navbar-nav">
          <li>
            <div data-netlify-identity-menu />
          </li>
        </ul>
        <center>
          <img src={logo_image} class="rounded" width="100%" alt="Logo" />
        </center>
      </div>
    );
  }
}

export default Header;
