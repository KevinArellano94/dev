import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  //Link,
  NavLink,
  Switch
  //Redirect,
  //withRouter
} from "react-router-dom";

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
    return (
      <BrowserRouter>
        <div class="container">
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink
              to="/"
              style={{
                padding: 10,
                color: "white"
              }}
              activeStyle={{
                padding: 10,
                fontWeight: "bold",
                color: "white"
              }}
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={{
                padding: 10,
                color: "white"
              }}
              activeStyle={{
                padding: 10,
                fontWeight: "bold",
                color: "white"
              }}
              exact
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={{
                padding: 10,
                color: "white"
              }}
              activeStyle={{
                padding: 10,
                fontWeight: "bold",
                color: "white"
              }}
              exact
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              style={{
                padding: 10,
                color: "white"
              }}
              activeStyle={{
                padding: 10,
                fontWeight: "bold",
                color: "white"
              }}
              exact
            >
              FAQ
            </NavLink>
            <NavLink
              to="/e-reader"
              style={{
                padding: 10,
                color: "white"
              }}
              activeStyle={{
                padding: 10,
                fontWeight: "bold",
                color: "white"
              }}
              exact
            >
              E-Reader
            </NavLink>
            <NavLink
              to="/e-reader-mobile"
              style={{
                padding: 10,
                color: "white"
              }}
              activeStyle={{
                padding: 10,
                fontWeight: "bold",
                color: "white"
              }}
              exact
            >
              E-Reader Mobile
            </NavLink>
          </nav>
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
          <Route render={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
