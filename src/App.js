import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return [
                <div class="container">
                  <h2>T-rex Scans</h2>
                  <p>A multilingual scanlation group.</p>
                  <embed src="https://img.shields.io/discord/518583314710528005.svg?style=badge" />
                </div>
              ];
            }}
          />
          <Route
            path="/about"
            exact
            render={() => {
              return [
                <div class="container">
                  <h2>About || T-rex Scans</h2>
                  <p>To be continued...</p>
                </div>
              ];
            }}
          />
          <Route
            path="/contact"
            exact
            render={() => {
              return [
                <div class="container">
                  <h2>Contact || T-rex Scans</h2>
                  <p>
                    Please fill out the text boxes below and you will be reached
                    out shortly after:
                  </p>
                  <div class="container">
                    <form
                      name="inquiries"
                      method="POST"
                      action="/success"
                      data-netlify="true"
                      data-netlify="true"
                    >
                      {/* <form name="contact" method="post" action="/success" data-netlify="true"></form> */}
                      <p>
                        <label>
                          Name <input type="text" name="name" />
                        </label>
                      </p>
                      <p>
                        <label>
                          Email <input type="email" name="email" />
                        </label>
                      </p>

                      <p>
                        <label>
                          Inquiry Category:{" "}
                          <select name="category[]" multiple>
                            <option value="technical">Technical</option>
                            <option value="job">Job</option>
                          </select>
                        </label>
                      </p>
                      <p>
                        <label>
                          Message: <textarea name="message" />
                        </label>
                      </p>

                      <p>
                        <button type="submit">Send</button>
                      </p>
                    </form>
                  </div>
                </div>
              ];
            }}
          />
          <Route
            path="/faq"
            exact
            render={() => {
              return [
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
                      <a href="mailto:trexscans@gmail.com">
                        trexscans@gmail.com
                      </a>
                      .
                    </p>

                    <div id="chart" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/frappe-charts/1.1.0/frappe-charts.min.iife.js" />
                    <script src="js/index.js" />
                  </div>
                </div>
              ];
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
