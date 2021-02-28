import React, { Component } from "react";
import bottle from "../assets/img/bottle-bg.png";

function Home() {
  return (
    <div className="container-fluid">
      <h1 className="body-title">WineSource</h1>
      <form className="form-inline my-2 my-lg-0 body-search">
        <input className="shadow p-3 bg-body rounded body-input" />
        <button className="btn btn-dark btn-go" type="submit">
          GO
        </button>
      </form>
      <label className="pl-5">or browser our section</label>
      <div className="card-section">
        <div className="row card-row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card shadow bg-body rounded">
              <img className="card-img-top" src={bottle} alt="Card image cap" />
              <div className="card-body">
                <label className="card-title">Cloud Wine</label>
                <label className="card-title">$20</label>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card shadow bg-body rounded">
              <img className="card-img-top" src={bottle} alt="Card image cap" />
              <div className="card-body">
                <label className="card-title">Cloud Wine</label>
                <label className="card-title">$20v</label>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card shadow bg-body rounded">
              <img className="card-img-top" src={bottle} alt="Card image cap" />
              <div className="card-body">
                <label className="card-title">Cloud Wine</label>
                <label className="card-title">$20v</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row card-row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card shadow bg-body rounded">
              <img className="card-img-top" src={bottle} alt="Card image cap" />
              <div className="card-body">
                <label className="card-title">Cloud Wine</label>
                <label className="card-title">$20</label>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card shadow bg-body rounded">
              <img className="card-img-top" src={bottle} alt="Card image cap" />
              <div className="card-body">
                <label className="card-title">Cloud Wine</label>
                <label className="card-title">$20v</label>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card shadow bg-body rounded">
              <img className="card-img-top" src={bottle} alt="Card image cap" />
              <div className="card-body">
                <label className="card-title">Cloud Wine</label>
                <label className="card-title">$20v</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
