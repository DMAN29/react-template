import React from "react";
import "./Labresult.css";

const Labresult = () => {
  const results = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
  ];

  return (
    <div className="lab-results-container">
      <h2>Lab Results</h2>
      <div className="results-list">
        {results.map((result, index) => (
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
