import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/loginstyle.css";

function WineRequestModal(props) {
  const [file, setFile] = React.useState("");

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  }

  const fileUpload = () => {
    document.getElementById("file_upload").click();
  }

  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} className="w-100" />;
  };

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Upload a File</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          {file && <ImageThumb image={file} />}
          <input type="file" onChange={(e) => handleUpload(e)} className="d-none" id="file_upload" />
          <button className="btn btn-bg-login" onClick={fileUpload}>Selete a File</button>
          <button className="btn btn-bg-create" onClick={props.onContinue}>Continue</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WineRequestModal;
