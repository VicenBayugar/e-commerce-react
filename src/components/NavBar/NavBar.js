import React, { Fragment } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light pt-3 pb-3">
        <div className="container d-flex justify-content-lg-around ">
          <a href="index.html" className="navbar-brand text-primary">
            <h1>AppleStore</h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav me-auto ms-auto botones">
              <li className="nav-item">
                <a href="index.html" className="nav-link fs-4 text-primary">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link fs-4 text-primary">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link fs-4 text-primary">
                  <CartWidget />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
