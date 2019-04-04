import React, {
  unstable_ConcurrentMode as ConcurrentMode,
  StrictMode
} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import netlifyIdentity from "netlify-identity-widget";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
//import Contact from "./components/Contact.js";
window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

ReactDOM.render(
  <ConcurrentMode>
    <StrictMode>
      {/* <Header /> */}
      <App />
      {/* <Contact /> */}
      <Footer />
    </StrictMode>
  </ConcurrentMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
