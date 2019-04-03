import React, { Component } from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: true
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    var shown = {
      display: this.state.shown ? "none" : "block"
    };

    var hidden = {
      display: this.state.shown ? "block" : "none"
    };

    return (
      <div class="container">
        <h2 style={shown}>this.state.shown = true</h2>
        <h2 style={hidden}>this.state.shown = false</h2>
        <button onClick={this.toggle.bind(this)}>Toggle</button>
      </div>
    );
  }
}

export default Contact;
