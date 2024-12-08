import React from "react";
import "./Labresult.css";

const Labresult = ({ lab_result }) => {
  return (
    <div className="lab-results-container">
      <h2>Lab Results</h2>
      <div className="results-list">
        {lab_result.map((result, index) => (
          <div className="result-item" key={index}>
            <span>{result}</span>
            <img src="download.svg" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labresult;
