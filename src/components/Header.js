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
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/faq">
                FAQ
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/E-Reader">
                E-Reader
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/E-Reader-Mobile">
                E-Reader Mobile
              </a>
            </li>
          </ul>
        </nav>
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
