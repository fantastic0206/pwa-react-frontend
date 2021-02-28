import React, { Component, useEffect } from "react";
import '../assets/css/profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const goLogOut = () => {
    localStorage.removeItem('isUser');
    window.location.href = "/";
  }

  return (
    <div className="container-fluid container-fluid-profile">
        <h1 className="text-center pt-2 title-profile-common">Profile</h1>
        <div className="card-profile shadow bg-body rounded">
            <h3 className="title-profile-common pt-4">Basic Info</h3>
            <div className="d-flex pt-4 group-profile-common">
                <label className="label-profile-common pt-3">Name</label>
                <input
                  className="shadow p-3 bg-body rounded input-common-profile"
                  placeholder="Brian Pierce"
                />
            </div>
            <div className="d-flex pt-3 pb-5 profile-date">
                <label className="label-profile-common pt-3">Date of Birth</label>
                <div className="d-flex profile-inner-date">
                    <input
                    className="shadow p-3 bg-body input-common-month"
                    placeholder="MM"
                    />
                    <input
                    className="shadow p-3 bg-body input-common-date"
                    placeholder="DD"
                    />
                    <input
                    className="shadow p-3 bg-body input-common-year"
                    placeholder="YYYY"
                    />
                </div>
            </div>
        </div>
        <div className="card-profile shadow bg-body rounded mt-5">
            <h3 className="title-profile-common pt-4">Contact Info</h3>
            <div className="d-flex pt-4 group-profile-common">
                <label className="label-profile-common pt-3">Phone</label>
                <input
                  className="shadow p-3 bg-body rounded input-common-profile"
                  placeholder="(123)456-7890"
                />
            </div>
            <div className="d-flex pt-3 group-profile-common">
                <label className="label-profile-common pt-3">Address</label>
                <input
                  className="shadow p-3 bg-body rounded input-common-profile"
                  placeholder="address"
                />
            </div>
            <div className="d-flex pt-3 group-profile-common">
                <label className="label-profile-common pt-3">City</label>
                <input
                  className="shadow p-3 bg-body rounded input-common-profile"
                  placeholder="Phoenix"
                />
            </div>
            <div className="d-flex pt-3 pb-5 group-profile-common">
                <label className="label-profile-common pt-3">State</label>
                <input
                  className="shadow p-3 bg-body rounded input-common-profile"
                  placeholder="Brian Pierce"
                />
            </div>
        </div>
        <div className="mt-4 pl-5 pr-5 d-flex btn-profile">
            <button className="btn btn-common-profile">Save Changes</button>
            <button className="btn btn-common-profile ml-3" onClick={goLogOut}>Log Out</button>
        </div>
    </div>
  );
}

export default Profile;
