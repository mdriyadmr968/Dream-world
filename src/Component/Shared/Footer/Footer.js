import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="site-footer">
        {/* ==========footer container============== */}
        <div className="container">
          <footer>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  Dream World is one of the most respected and successful names
                  in the global travel industry, with a long and rich company
                  heritage spanning 30 years.
                </p>
              </div>
              <div className="col-xs-6 col-md-3"></div>
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="container mx-5">
                <div className="row">
                  <div className="col-md-7 col-sm-6 col-xs-12">
                    <p className="copyright-text">
                      Copyright &copy; 2021 All Rights Reserved by
                      <a href="/home"> Dream World </a>
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12n">
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#home">
                          {" "}
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#facebook">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a className="dribbble" href="#dribble">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#linkedin">
                          <FontAwesomeIcon icon={faDribbble} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
