import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/winerequest.css";
import WineRequestModal from "../containers/wineRequestModal";
import ConfirmRequestModal from "../containers/confirmRequestModal";
import LoginModal from "../containers/loginModal";

import bottle from "../assets/img/bottle-bg.png";

function WineRequest() {
  const [modalShow, setModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [confirmRequestModalShow, setConfirmRequestModalShow] = React.useState(
    false
  );

  const [isFile, setIsFile] = React.useState(false);
  const [file, setFile] = React.useState();

  const onContinue = (data) => {
    setFile(data);
    setModalShow(false);
    setIsFile(true);
  };

  const handleBackLogin = () => {
    setConfirmRequestModalShow(false);
    setLoginModalShow(true);
  };

  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} className="w-100" />;
  };

  return (
    <>
      <div className="container-fluid container-fluid-wine-request">
        <h1 className="text-center pt-3">Make a Wine Request</h1>
        <div className="wine-request-card shadow bg-body rounded pt-4 pb-4">
          <div className="row group-btn-input">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <input
                className="shadow p-3 bg-body rounded input-wine-request"
                placeholder={isFile ? "Cloud Wine - 2017. Same as picture please" : "What are you looking for"}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <button className="btn btn-wine-request ml-3" onClick={() => setConfirmRequestModalShow(true)}>Request</button>
            </div>
          </div>
          <div className="row pt-5">
            {file && <ImageThumb image={file} />}
          </div>
          <div className="row pt-5">
            <button
              className="btn btn-wine-request-image"
              onClick={() => setModalShow(true)}
            >
              Request with an Image
            </button>
          </div>
        </div>
      </div>

      <WineRequestModal
        show={modalShow}
        onContinue={onContinue}
        onHide={() => setModalShow(false)}
      />

      <ConfirmRequestModal
        show={confirmRequestModalShow}
        onHide={() => setConfirmRequestModalShow(false)}
        handleBackLogin={handleBackLogin}
      />

      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
        // showForgotPasswordModal={() => handleOtherShowModal("forgotpassword")}
        // showRegisterModal={() => handleOtherShowModal("register")}
        // onLogin={setSessionChrome}
      />
    </>
  );
}

export default WineRequest;
