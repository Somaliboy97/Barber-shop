import React from "react";
import "./style.css";

export const Home = () => {
  return (
    <div id="about">
      <header>
        <div className="row">
          <div className="col-12">
            <img id="logo" src="../../images/logo.png" alt="logo"></img>
            <h6>
              <span className="icon"></span>
              229 Skokie Valley road. Highland Park, Illinois
              <i src="../../icons/phone.png" alt="phone"></i>888-888-8888
            </h6>
          </div>
        </div>
      </header>
      <footer>
        <div className="row" id="adres">
          <div className="col-12">
            <h5>229 Skokie Valley Road. Highland Park, IL 60035 / suite 24</h5>
            <br />
            <div className="phone">Phone: (847) 777-0274</div>
            <br />
          </div>
        </div>
        <div className="icons">
          <a href="mailto:#">
            <i
              id="social-em"
              className="fa fa-envelope-square fa-3x social"
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
};