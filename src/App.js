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
                  <div class="container" />
                  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
                  <script type="text/babel">
      const encode = data => {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      };

      class ContactForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = { name: "", email: "", message: "" };
        }

        /* Here’s the juicy bit for posting the form submission */

        handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

          e.preventDefault();
        };

        handleChange = e => this.setState({ [e.target.name]: e.target.value });

        render() {
          const { name, email, message } = this.state;
          return (
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>
                  Your Name:{" "}
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Your Email:{" "}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Message:{" "}
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          );
        }
      }

      ReactDOM.render(<ContactForm />, document.getElementById("root"));
    </script>
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
