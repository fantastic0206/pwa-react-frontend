import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/shopingcart.css";
import bottle from "../assets/img/bottle-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ShopingCart() {
  const trash = <FontAwesomeIcon icon={faTrash} />;

  return (
    <div className="container-fluid container-fluid-shopping-cart">
      <h1 className="text-center pt-3">Shopping Cart</h1>
      <div className="row border-top pt-3 pb-3">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-md-8">
              <img src={bottle} className="w-100" />
            </div>
            <div className="col-md-4">
              <h4>Cloud Wine</h4>
              <label>2017 From Napa</label>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-md-4">
              <input className="shadow p-3 bg-body rounded" placeholder="2" />
              <p>Quantatity</p>
            </div>
            <div className="col-md-4">
              <h4>$ 40.00 USD</h4>
              <label>Price</label>
            </div>
            <div className="col-md-4">
              <i>{trash}</i>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top pt-3 pb-3">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-md-8">
              <img src={bottle} className="w-100" />
            </div>
            <div className="col-md-4">
              <h4>Cloud Wine</h4>
              <label>2017 From Napa</label>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-md-4">
              <input className="shadow p-3 bg-body rounded" placeholder="2" />
              <p>Quantatity</p>
            </div>
            <div className="col-md-4">
              <h4>$ 40.00 USD</h4>
              <label>Price</label>
            </div>
            <div className="col-md-4">
              <i>{trash}</i>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top pt-3 pb-3">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div class="form-group shadow-textarea">
            <label for="exampleFormControlTextarea6">
              Special Instruction
            </label>
            <textarea
              class="form-control z-depth-1"
              id="exampleFormControlTextarea6"
              rows="3"
              placeholder="Write something here..."
            ></textarea>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm 5">
            <div className="row">
                <div className="col-md-6">
                    <h4>$ 80 USD</h4>
                    <label>Sub Total</label>
                </div>
                <div className="col-md-6">
                    <Link to="savedata" className="btn btn-shopping-check-out">Check Out</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ShopingCart;
