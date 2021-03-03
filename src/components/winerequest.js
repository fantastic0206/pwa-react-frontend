import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/winerequest.css";
import WineRequestModal from "../containers/wineRequestModal";
import ConfirmRequestModal from "../containers/confirmRequestModal";
import LoginModal from "../containers/loginModal";
import ForgotPasswordModal from "../containers/forgotPasswordModal";
import RegisterOneModal from "../containers/registerOneModal";
import RegisterTwoModal from "../containers/registerTwoModal";

import bottle from "../assets/img/bottle-bg.png";

function WineRequest() {
  const [modalShow, setModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [confirmRequestModalShow, setConfirmRequestModalShow] = React.useState(
    false
  );

  const [isFile, setIsFile] = React.useState(false);
  const [file, setFile] = React.useState();

  const [forgotPasswordModalShow, setForgotPasswordModalShow] = React.useState(
    false
  );
  const [registerOneModalShow, setRegisterOneModalShow] = React.useState(false);
  const [registerTwoModalShow, setRegisterTwoModalShow] = React.useState(false);
  const [user, setUser] = React.useState(false);

  const handleBackLogins = (backData) => {
    if (backData === "forgotpassword") setForgotPasswordModalShow(false);
    if (backData === "registerOne") setRegisterOneModalShow(false);
    if (backData === "registerTwo") setRegisterTwoModalShow(false);
    setLoginModalShow(true);
  };

  const handleOtherShowModal = (handleData) => {
    if (handleData === "forgotpassword") setForgotPasswordModalShow(true);
    if (handleData === "register") setRegisterOneModalShow(true);
    setLoginModalShow(false);
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

  useEffect(() => {
    setUser(localStorage.getItem('isUser'));
  });

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
        showForgotPasswordModal={() => handleOtherShowModal("forgotpassword")}
        showRegisterModal={() => handleOtherShowModal("register")}
        onLogin={setSessionChrome}
      />

      <ForgotPasswordModal
        show={forgotPasswordModalShow}
        onBackLogin={() => handleBackLogins("forgotpassword")}
        onHide={() => setForgotPasswordModalShow(false)}
      />

      <RegisterOneModal
        show={registerOneModalShow}
        nextStep={() => handleNextStep()}
        onBackLogin={() => handleBackLogins("registerOne")}
        onHide={() => setRegisterOneModalShow(false)}
      />

      <RegisterTwoModal
        show={registerTwoModalShow}
        onBackLogin={() => handleBackLogins("registerTwo")}
        onHide={() => setRegisterTwoModalShow(false)}
      />
    </>
  );
}

export default WineRequest;
