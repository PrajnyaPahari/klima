import React from "react";
//import "./ClimateData.css";
//import Faker from 'faker';
const ClimateData = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {props.location} {props.temparature}&deg; C{" "}
        </h5>
        <p className="card-text">Todays Prediction is {props.condition}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Feels Like : {props.feelsLike}</li>
        <li className="list-group-item">
          {props.tempMax} is todays Maximum temparature
        </li>
        <li className="list-group-item">
          {props.tempMin} is todays Minimum temparature
        </li>
      </ul>
      <div className="card-body">
        <a href="/" className="card-link">
          Card link
        </a>
        <a href="/" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default ClimateData;
