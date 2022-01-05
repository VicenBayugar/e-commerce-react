import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark pt-4 pb-4">
        <div className="container d-flex justify-content-lg-around">
          <Link className="navbar-brand text-light fs-2" to="/">
            Tienda Electrónica
          </Link>

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
                <Link className="nav-link fs-4 text-light" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4 text-light" to="/Productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4 text-light" to="/Carrito">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
