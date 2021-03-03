import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/loginstyle.css";
import { Link } from 'react-router-dom';

function ConfirmRequestModal(props) {
  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Confirm Your Request</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <label>You are making a request for</label>
          <input
            className="shadow p-3 bg-body rounded login-input"
            placeholder="Enter the Number of cases:"
          />
          <Link to="shopingcart" className="btn btn-bg-login">Continue</Link>
          <button className="btn btn-bg-create" onClick={props.handleBackLogin}>Back to Login</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmRequestModal;