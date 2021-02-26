import React, { Component } from "react";
import "../assets/css/style.css";
import LoginModal from "../containers/loginModal.js";
import ForgotPasswordModal from "../containers/forgotPasswordModal";
import RegisterOneModal from "../containers/registerOneModal";
import RegisterTwoModal from "../containers/registerTwoModal";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [forgotPasswordModalShow, setForgotPasswordModalShow] = React.useState(
    false
  );
  const [registerOneModalShow, setRegisterOneModalShow] = React.useState(false);
  const [registerTwoModalShow, setRegisterTwoModalShow] = React.useState(false);

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
          <button
            className="btn btn-dark btn-login"
            onClick={() => setModalShow(true)}
          >
            Login
          </button>
        </div>
      </nav>
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        showForgotPasswordModal={() => handleOtherShowModal("forgotpassword")}
        showRegisterModal={() => handleOtherShowModal("register")}
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
