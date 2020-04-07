import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Form = () => {
  return (
    <div className="form page">
      <Header />
      <div className="nameTag">Drop Us A Message</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input type="text" id="phone" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="button">
          <button id="btn">Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
