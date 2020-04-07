import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <img className="logo" src="../../images/logo.png" alt="logo" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6">
          <div className="row">
            <div className="col-12" id="btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a
                href="http://maps.google.com/?q=229%20Skokie%20Valley%20Road%20suite%2024.%20Highland%20Park,%20Illinois"
                target="_blank"
                rel="noopener noreferrer"
                className="address"
              >
                <img src="../../icons/location.png" alt="" />
                229 Skokie Valley road. Highland Park, Illinois
              </a>
              <a
                href="http://test.acc4action.com/products/tel:847-777-0274"
                target="_blank"
                rel="noopener noreferrer"
                className="phone"
              >
                <img src="../../icons/phone.png" alt="" />
                847-777-0274
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
