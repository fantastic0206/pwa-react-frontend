import React, { Component } from "react";
import "../assets/css/pricecheck.css";
import { Link } from 'react-router-dom';

function PriceCheck() {
  return (
    <div className="container-fluid container-fluid-price-check">
      <h1 className="text-center pt-3">Price Check</h1>
      <div className="price-check-card shadow bg-body rounded pt-4 pb-4">
        <div className="row group-btn-input">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <input
              className="shadow p-3 bg-body rounded input-price-check"
              placeholder="What are you looking for"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <Link to="winerequest" className="btn btn-price-check ml-3 pt-3">Price Check</Link>
          </div>
        </div>
      </div>
      <div className="price-check-card shadow bg-body rounded mt-5">
        <div className="row pt-4">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Vivno</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Vivno</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Vivno</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Vivno</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Average Price</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <button className="btn btn-price-check-average">Update Average</button>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Wine Source Cost</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <label>Distributor Name</label>
            <div className="input-group mb-3 shadow rounded">
              <span className="p-3 bg-body span-price-check" id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className="p-3 bg-body input-price-check"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row pt-5">
            <button className="btn btn-save-order-price-check">Save Order</button>
        </div>
      </div>
    </div>
  );
}

export default PriceCheck;
