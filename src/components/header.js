import React, { Component } from "react";
import '../assets/css/headerstyle.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg-style">
        <a className="navbar-brand" href="/">WineSource</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown nav-order">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Orders
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  New Requests
                </a>
                <a className="dropdown-item" href="#">
                  Approval
                </a>
                <a className="dropdown-item" href="#">
                  Pending Requests
                </a>
                <a className="dropdown-item" href="#">
                  Payment Pending
                </a>
                <a className="dropdown-item" href="#">
                  Scheduled Orders
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Price Check
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Saved Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Payment Pending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Scheduled Orders
              </a>
            </li>
          </ul>
          <button className="btn btn-dark btn-login">Login</button>
        </div>
      </nav>
    );
  }
}

export default Header;
