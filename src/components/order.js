import React, { Component } from "react";
import "../assets/css/orderstyle.css";

import bottle from "../assets/img/bottle-bg.png";
import processImg1 from "../assets/img/card-bg-1.png";
import processImg2 from "../assets/img/card-bg-2.png";
import processImg3 from "../assets/img/card-bg-3.png";
import processImg4 from "../assets/img/card-bg-4.png";

import ChatModal from "../containers/chatModal";

function Order() {
  const [chatModalShow, setChatModalShow] = React.useState(false);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center pt-2 body-title-order">Orders</h1>
        <div className="row btn-group-common">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 btn-padding d-flex">
            <button className="btn btn-common">All Orders</button>
            <button className="btn btn-common btn-active-bg-color">
              New Requests
            </button>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 btn-padding d-flex">
            <button className="btn btn-common">Approval</button>
            <button className="btn btn-common">Pending Requests</button>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 btn-padding d-flex">
            <button className="btn btn-common">Payment Pending</button>
            <button className="btn btn-common">Schedule Orders</button>
          </div>
        </div>
        <div className="row card-group-common mt-4">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card-part shadow bg-body rounded">
              <h2 className="text-center card-title-common">Aditya Ananth</h2>
              <div className="btn-inner-group d-flex">
                <button className="btn btn-inner-common btn-active-bg-color">
                  Info
                </button>
                <button className="btn btn-inner-common">Customer Quote</button>
                <button className="btn btn-inner-common">Price Check</button>
                <button className="btn btn-inner-common" onClick={() => setChatModalShow(true)}>Customer Chat</button>
              </div>
              <div className="card-img-common pt-5 pl-5 pr-5">
                <img src={bottle} alt="Card image cap" />
              </div>
              <label className="text-center bottle-name">
                Chardonnay 2017
                <br />3 Cases
              </label>
              <div className="d-flex img-group-process">
                <img src={processImg1} alt="process image" />
                <img src={processImg2} alt="process image" />
                <img src={processImg3} alt="process image" />
                <img src={processImg4} alt="process image" />
              </div>
              <div className="d-flex btn-footer-group pt-5 pb-5">
                <button className="btn btn-reject">Reject</button>
                <button className="btn btn-approve ml-5">Approve</button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card-part shadow bg-body rounded">
              <h2 className="text-center card-title-common">Aditya Ananth</h2>
              <div className="btn-inner-group d-flex">
                <button className="btn btn-inner-common">Info</button>
                <button className="btn btn-inner-common">Customer Quote</button>
                <button className="btn btn-inner-common btn-active-bg-color">
                  Price Check
                </button>
                <button className="btn btn-inner-common" onClick={() => setChatModalShow(true)}>Customer Chat</button>
              </div>
              <div className="d-flex mt-5">
                <input
                  className="shadow p-3 bg-body rounded input-update-name"
                  placeholder="Chardonnay 2017"
                />
                <button className="btn btn-update-name ml-5">
                  Update Name
                </button>
              </div>
              <label className="border-bottom w-100 text-center mt-4 font-family-label">
                Price Checker
              </label>
              <div className="d-flex vivno-label">
                <label className="vivno-left">Vivno</label>
                <label className="vivno-right">Vivno</label>
              </div>
              <div className="vivno-group d-flex">
                <div className="input-group mb-3 shadow rounded">
                  <span
                    className="p-3 bg-body login-input span-input-order"
                    id="basic-addon1"
                  >
                    $
                  </span>
                  <input
                    type="text"
                    className="p-3 bg-body login-input phone-input-order"
                    placeholder=""
                  />
                </div>
                <div className="input-group mb-3 shadow rounded ml-5">
                  <span
                    className="p-3 bg-body login-input span-input-order"
                    id="basic-addon1"
                  >
                    $
                  </span>
                  <input
                    type="text"
                    className="p-3 bg-body login-input phone-input-order"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="d-flex vivno-label">
                <label className="vivno-left">Vivno</label>
                <label className="vivno-right">Vivno</label>
              </div>
              <div className="vivno-group d-flex">
                <div className="input-group mb-3 shadow rounded">
                  <span
                    className="p-3 bg-body login-input span-input-order"
                    id="basic-addon1"
                  >
                    $
                  </span>
                  <input
                    type="text"
                    className="p-3 bg-body login-input phone-input-order"
                    placeholder=""
                  />
                </div>
                <div className="input-group mb-3 shadow rounded ml-5">
                  <span
                    className="p-3 bg-body login-input span-input-order"
                    id="basic-addon1"
                  >
                    $
                  </span>
                  <input
                    type="text"
                    className="p-3 bg-body login-input phone-input-order"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="d-flex btn-footer-group pt-5 pb-5">
                <button className="btn btn-reject">Get Website Prices</button>
                <button className="btn btn-approve ml-5">Update Prices</button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card-part shadow bg-body rounded">
              <h2 className="text-center card-title-common">Aditya Ananth</h2>
              <div className="btn-inner-group d-flex">
                <button className="btn btn-inner-common btn-active-bg-color">
                  Info
                </button>
                <button className="btn btn-inner-common">Customer Quote</button>
                <button className="btn btn-inner-common">Price Check</button>
                <button className="btn btn-inner-common" onClick={() => setChatModalShow(true)}>Customer Chat</button>
              </div>
              <div className="card-img-common pt-5 pl-5 pr-5">
                <img src={bottle} alt="Card image cap" />
              </div>
              <label className="text-center bottle-name">
                Chardonnay 2017
                <br />3 Cases
              </label>
              <div className="d-flex img-group-process">
                <img src={processImg1} alt="process image" />
                <img src={processImg2} alt="process image" />
                <img src={processImg3} alt="process image" />
                <img src={processImg4} alt="process image" />
              </div>
              <div className="d-flex btn-footer-group pt-5 pb-5">
                <button className="btn btn-reject">Reject</button>
                <button className="btn btn-approve ml-5">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatModal
        show={chatModalShow}
        onHide={() => setChatModalShow(false)}
      />
    </>
  );
}

export default Order;
