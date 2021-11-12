import React, { Fragment } from "react";
//import "./NavBar.css";
import "../bootstrap/bootstrap.min.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark pt-3 pb-3">
        <div class="container d-flex justify-content-lg-around ">
          <a href="index.html" class="navbar-brand">
            <h1>AppleStore</h1>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav me-auto ms-auto botones">
              <li class="nav-item">
                <a href="index.html" class="nav-link">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a href="index.html" class="nav-link">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a href="index.html" class="nav-link">
                  Carrito
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
