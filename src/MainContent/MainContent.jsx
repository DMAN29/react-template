import React from "react";
import "./MainContent.css";
import BloodPressureChart from "./BloodPressureChart";

function MainContent({ diagnosis_history }) {
  return (
    <div className="main-content-container">
      <h1>Diagnosis History</h1>
      <BloodPressureChart diagnosisHistory={diagnosis_history} />
      <div className="temp">
        <div className="respiratory">
          <img src="respiratory rate.svg" alt="" />
          <h3>Respiratory Rate</h3>
          <h1>20 bpm</h1>
          <span>Normal</span>
        </div>
        <div className="temperature">
          <img src="temperature.svg" alt="" />
          <h3>Temperature</h3>
          <h1>98.6 &deg; F</h1>
          <span>Normal</span>
        </div>
        <div className="heart">
          <img src="HeartBPM.svg" alt="" />
          <h3>Heart Rate</h3>
          <h1>78 bpm</h1>
          <span>Lower than Average</span>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
