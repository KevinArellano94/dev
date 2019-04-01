import React, { Component } from "react";

class Footer extends React.Component {
  render() {
    return [
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">T-Rex Scans.</p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://google.com">Google</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                © 2019 Copyright. All Rights Reserved.
              </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a
                    class="behance"
                    href="https://www.behance.net/trexscans2139"
                  >
                    <i class="fa fa-behance" />
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="https://dribbble.com/trexscans">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a class="facebook" href="https://www.facebook.com/rexscans">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    class="twitter"
                    href="https://www.instagram.com/trexscans/"
                  >
                    <i class="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    class="linkedin"
                    href="https://www.linkedin.com/in/t-rex-scans-bbb915181/"
                  >
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    class="pinterest"
                    href="https://www.pinterest.ca/Trexscanlations/"
                  >
                    <i class="fa fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a
                    class="pixiv"
                    href="https://www.pixiv.net/member.php?id=36961258"
                  >
                    <i class="fa fa-pixiv" />
                  </a>
                </li>
                <li>
                  <a
                    class="reddit"
                    href="https://www.reddit.com/user/trexscans"
                  >
                    <i class="fa fa-reddit" />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="https://twitter.com/scans_t">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    ];
  }
}

export default Footer;
