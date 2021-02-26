import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/registerstyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function RegisterTwoModal(props) {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [eyeIcon, setEyeIcon] = React.useState(eye);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEyeIcon(passwordShown ? eye : eyeSlash);
  };

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Buyer Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          {/* <Container> */}
          <label className="text-center">Phone Number</label>
          <div className="input-group mb-3 shadow rounded">
            <span
              className="p-3 bg-body login-input span-input"
              id="basic-addon1"
            >
              +1
            </span>
            <input
              type="text"
              className="p-3 bg-body login-input phone-input"
              placeholder=""
            />
          </div>
          <input
            className="shadow p-3 bg-body rounded login-input mt-3"
            placeholder="Email"
          />
          <label className="email-label common-label pt-2">We will never share your email with anyone</label>
          <input
            className="shadow p-3 bg-body rounded login-input mt-3"
            type="password"
            placeholder="Password"
          />
          <label className="password-label common-label pt-2">
            Make sure to use a combo of numbers, upper case, lower case, special
          </label>
          <div className="input-group mb-3 shadow rounded verify-password-group">
            <input
              type={passwordShown ? "text" : "password"}
              className="p-3 bg-body login-input verify-password-input"
              placeholder="Verify Password"
            />
            <span
              className="p-2 bg-body login-input verify-password-span"
              id="basic-addon1"
            >
              <i onClick={togglePasswordVisiblity}>{eyeIcon}</i>
            </span>
          </div>
          <button className="btn btn-bg-next">Next</button>
          <button className="btn btn-bg-back-login" onClick={props.onBackLogin}>
            Back to Log In
          </button>
          {/* </Container> */}
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default RegisterTwoModal;
