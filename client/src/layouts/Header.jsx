import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./header.css";

export default function Header({ onCartClick, onBackToHome }) {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="container px-0 px-lg-3">
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <NavLink to="/" className="navbar-brand">
          <span className="font-weight-bold text-uppercase text-dark">
            Boutique
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={onBackToHome}>
                Home
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={onCartClick}>
                <i className="fas fa-dolly-flatbed mr-1 text-gray position-relative"></i>
                Cart
                {/* <span
                  className="position-absolute px-1 text-xs text-white bg-danger rounded-circle"
                  style={{ top: "18px" }}
                >
                  {carts.cartToTalProduct}
                </span> */}
              </button>
            </li>
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{ cursor: "pointer" }}
                  id="pagesDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-alt mr-1 text-gray"></i>
                  {user.fullname}
                </a>
                <div
                  className="dropdown-menu mt-3"
                  aria-labelledby="pagesDropdown"
                >
                  <Link
                    className="dropdown-item border-0 transition-link"
                    onClick={() => logOutUser()}
                    to="/login"
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <i className="fas fa-user-alt mr-1 text-gray"></i>Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
