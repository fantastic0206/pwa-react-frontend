import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/loginstyle.css";

function LoginModal(props) {
  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          {/* <Container> */}
          <input
            className="shadow p-3 bg-body rounded login-input"
            placeholder="Username"
          />
          <input
            className="shadow p-3 bg-body rounded login-input mt-3"
            placeholder="Password"
          />
          <label className="move-forgot mt-2" onClick={props.showForgotPasswordModal}>
            Forgot password?
          </label>
          <button className="btn btn-bg-login">Log In</button>
          <button className="btn btn-bg-create" onClick={props.showRegisterModal}>Create an Account</button>
          {/* </Container> */}
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default LoginModal;
