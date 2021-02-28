import React, { Component } from "react";
import "../assets/css/pricecheck.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function SaveData() {
  const trash = <FontAwesomeIcon icon={faTrash} />;
  return (
    <div className="container-fluid">
      <h1 className="text-center pt-3">Saved Data</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Vivino</th>
              <th scope="col">Total-Wines</th>
              <th scope="col">Wine.com</th>
              <th scope="col">Wine-Searcher</th>
              <th scope="col">Average</th>
              <th scope="col">WineSource Cost</th>
              <th scope="col">Distributor</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Cloud Wine</th>
              <td>$20</td>
              <td>$20</td>
              <td>$20</td>
              <td>$20</td>
              <td>$20</td>
              <td>$20</td>
              <td>Wine Co</td>
              <td>
                <i>{trash}</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SaveData;
