import React from "react";
import "./navbar.css";
import CLeft from "./navChild/centerLeft/CLeft";
import CRight from "./navChild/centerRight/CRight";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className=" w-100 d-flex align-items-center justify-content-between">
          <span className="fs-5">CV BUILDER</span>
          <div className=" fs-5 d-flex align-items-center">
            <div className="center-left">
                  <CLeft />
            </div>
            <span>Welcome to CV Builder</span>
            <div className="center-right">
                 {/* <CRight /> */}

            </div>
          </div>
          <div className="nav-right">
            <div className="sing-up d-none">
              <button className="btn btn-primary" type="button">
                Login
              </button>
              <button className="btn btn-primary" type="button">
                Register
              </button>
            </div>
            <div className="after-Login">
              <button className="btn btn-primary fs-6 bg-success" type="button">
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
