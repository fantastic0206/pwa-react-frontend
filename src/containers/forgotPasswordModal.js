import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/forgotpasswordstyle.css";

function ForgotPasswordModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Forgot Password
        </Modal.Title>
      </Modal.Header>
      <label className="enter-email">Enter Email</label>
      <Modal.Body className="show-grid">
        {/* <Container> */}
        <input
          className="shadow p-3 bg-body rounded login-input"
          placeholder="Email"
        />
        <button className="btn btn-bg-request-password">
          Request Password Reset
        </button>
        <button className="btn btn-bg-back-login" onClick={props.onBackLogin}>Back to Log In</button>
        {/* </Container> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ForgotPasswordModal;
