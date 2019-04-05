import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  //Link,
  NavLink,
  Switch
  //Redirect
  //withRouter
} from "react-router-dom";
import logo_image from "./images/home_World_Map.jpg";
import NetlifyAuth from "./components/NetlifyAuth.js";

const Header = () => {
  return (
    <BrowserRouter>
      <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink to="/" className="normal" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                to="/about"
                className="normal"
                activeClassName="active"
                exact
              >
                About
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                to="/contact"
                className="normal"
                activeClassName="active"
                exact
              >
                Contact
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                to="/faq"
                className="normal"
                activeClassName="active"
                exact
              >
                FAQ
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                to="/e-reader"
                className="normal"
                activeClassName="active"
                exact
              >
                E-Reader
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                to="/e-reader-mobile"
                className="normal"
                activeClassName="active"
                exact
              >
                E-Reader Mobile
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                to="/admin"
                className="normal"
                activeClassName="active"
                exact
              >
                Administrator
              </NavLink>
            </li>
          </ul>
        </nav>

        <logo scrolled={"scrolled"} navigationStyle={"navigationStyle"} />
        <ul className="nav navbar-nav">
          <li>
            <NetlifyAuth />
          </li>
        </ul>

        {/* <searchIcon toggleSearch={"toggleSearch"} />
        <ul className="nav navbar-nav">
          <li>
            <div data-netlify-identity-menu />
          </li>
        </ul> */}

        <center>
          <img src={logo_image} class="rounded" width="100%" alt="Logo" />
        </center>
      </div>

      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/contact" render={props => <Contact {...props} />} />
        <Route path="/faq" render={props => <FAQ {...props} />} />
        <Route path="/e-reader" render={props => <EReader {...props} />} />
        <Route
          path="/e-reader-mobile"
          render={props => <EReaderMobile {...props} />}
        />
        <Route path="/admin" render={props => <Administrator {...props} />} />
        <Route render={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div class="container">
      <h2>T-rex Scans</h2>
      <p>A multilingual scanlation group.</p>
      <embed src="https://img.shields.io/discord/518583314710528005.svg?style=badge" />
    </div>
  );
};

const About = () => {
  return (
    <div class="container">
      <h2>About || T-rex Scans</h2>
      <p>To be continued...</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div class="container">
      <h2>Contact || T-rex Scans</h2>
      <p>
        Please fill out the text boxes below and you will be reached out shortly
        after:
      </p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <br />
      <div>
        <h4>Q: Can I have Admin?</h4>
        <p>A: No.</p>
        <h4>Q: Which genres of manga do you work on?</h4>
        <p>A: We work on all genres of manga.</p>
        <h4>Q: Where can I provide suggestions?</h4>
        <p>
          A: Please email us at:{" "}
          <a href="mailto:trexscans@gmail.com">trexscans@gmail.com</a>.
        </p>

        <div id="chart" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/frappe-charts/1.1.0/frappe-charts.min.iife.js" />
        <script src="js/index.js" />
      </div>
    </div>
  );
};

const EReader = () => {
  return (
    <div class="container">
      <h2>E-Reader || T-rex Scans</h2>
      <p>E-Reader</p>
    </div>
  );
};

const EReaderMobile = () => {
  return (
    <div class="container">
      <h2>E-Reader Mobile || T-rex Scans</h2>
      <p>E-Reader Mobile</p>
    </div>
  );
};

const Administrator = () => {
  return (
    <div class="container">
      <h1>Administrator Page</h1>
      <h2>If you see this page, you have Administrative roles.</h2>
    </div>
  );
};

const NoMatch = () => {
  return (
    <div class="container">
      <h2>Robot Ninja Monkeys || T-rex Scans</h2>
      <h1>Code 404... Stop...just...stop.</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return [<Header />];
  }
}

export default App;
