import React, { Component, useEffect } from "react";
import "../assets/css/style.css";
import LoginModal from "../containers/loginModal.js";
import ForgotPasswordModal from "../containers/forgotPasswordModal";
import RegisterOneModal from "../containers/registerOneModal";
import RegisterTwoModal from "../containers/registerTwoModal";
import { Link } from 'react-router-dom';

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [forgotPasswordModalShow, setForgotPasswordModalShow] = React.useState(
    false
  );
  const [registerOneModalShow, setRegisterOneModalShow] = React.useState(false);
  const [registerTwoModalShow, setRegisterTwoModalShow] = React.useState(false);
  const [user, setUser] = React.useState(false);

  const handleBackLogin = (backData) => {
    if (backData === "forgotpassword") setForgotPasswordModalShow(false);
    if (backData === "registerOne") setRegisterOneModalShow(false);
    if (backData === "registerTwo") setRegisterTwoModalShow(false);
    setModalShow(true);
  };

  const handleOtherShowModal = (handleData) => {
    if (handleData === "forgotpassword") setForgotPasswordModalShow(true);
    if (handleData === "register") setRegisterOneModalShow(true);
    setModalShow(false);
  };

  const handleNextStep = () => {
    console.log("abcd")
    setRegisterOneModalShow(false);
    setRegisterTwoModalShow(true);
  }

  const setSessionChrome = () => {
    localStorage.setItem('isUser', true);
    setModalShow(false)
  }

  useEffect(() => {
    setUser(localStorage.getItem('isUser'));
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg-style">
        <a className="navbar-brand" href="/">
          WineSource
        </a>
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
              <Link
                className="nav-link dropdown-toggle"
                to="order"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Orders
              </Link>
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
              <Link to="pricecheck" className="nav-link" href="#">
                Price Check
              </Link>
            </li>
            <li className="nav-item">
              <Link to="savedata" className="nav-link">
                Saved Data
              </Link>
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
          <button
            onClick={() => setModalShow(true)}
            className={user ? 'd-none' : 'btn btn-dark btn-login d-block'}
          >
            Login
          </button>
          <Link
            className={user ? 'btn btn-dark btn-login d-block' : 'd-none'}
            to="profile"
          >
            Profile
          </Link>
        </div>
      </nav>
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        showForgotPasswordModal={() => handleOtherShowModal("forgotpassword")}
        showRegisterModal={() => handleOtherShowModal("register")}
        onLogin={setSessionChrome}
      />

      <ForgotPasswordModal
        show={forgotPasswordModalShow}
        onBackLogin={() => handleBackLogin("forgotpassword")}
        onHide={() => setForgotPasswordModalShow(false)}
      />

      <RegisterOneModal
        show={registerOneModalShow}
        nextStep={() => handleNextStep()}
        onBackLogin={() => handleBackLogin("registerOne")}
        onHide={() => setRegisterOneModalShow(false)}
      />

      <RegisterTwoModal
        show={registerTwoModalShow}
        onBackLogin={() => handleBackLogin("registerTwo")}
        onHide={() => setRegisterTwoModalShow(false)}
      />
    </>
  );
}

export default Header;
