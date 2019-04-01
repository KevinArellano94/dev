import React, { Component } from "react";
import logo from "../images/home_World_Map.jpg";

class Header extends React.Component {
  render() {
    return [
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
        <div data-netlify-identity-menu />
        <div data-netlify-identity-button>| Sign up | Log in |</div>
        <center>
          <img src={logo} class="rounded" width="100%" alt="Logo" />
        </center>
      </div>
    ];
  }
}

export default Header;
