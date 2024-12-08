import React from "react";
import "./Diagnostic.css";
const Diagnostic = ({ diagnostic_list }) => {
  return (
    <div className="diagnostic-list-container">
      <h2>Diagnostic List</h2>
      <table className="diagnostic-table">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostic_list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diagnostic;
