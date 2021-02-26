import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/registerstyle.css";

function RegisterOneModal(props) {
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
          <input
            className="shadow p-3 bg-body rounded login-input"
            placeholder="Username"
          />
          <input
            className="shadow p-3 bg-body rounded login-input mt-3"
            placeholder="First Name"
          />
          <input
            className="shadow p-3 bg-body rounded login-input mt-3"
            placeholder="Last Name"
          />
          <div className="d-flex mt-3">
            <input
              className="shadow p-3 bg-body login-input login-input-month"
              placeholder="MM"
            />
            <input
              className="shadow p-3 bg-body login-input login-input-date"
              placeholder="DD"
            />
            <input
              className="shadow p-3 bg-body login-input login-input-year"
              placeholder="YYYY"
            />
          </div>
          <button className="btn btn-bg-next" onClick={props.nextStep}>
            Next
          </button>
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

export default RegisterOneModal;
