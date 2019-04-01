import React, { Component } from "react";

class Contact extends React.Component {
  render() {
    return [
      <html>
        <body>
          <div class="container">
            <form name="contact" netlify>
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
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </body>
      </html>
    ];
  }
}

export default Contact;
