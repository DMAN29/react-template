import React from "react";
import "./Sidebar.css";

function Sidebar({ data }) {
  return (
    <div className="">
      <div className="heading">
        <h2>Patients</h2>
        <img className="img-cls" src="search.png" alt="Search" />
      </div>

      <ul>
        {data.map((patient, index) => (
          <li key={index}>
            <div className="data">
              <img
                src={patient.profile_picture}
                alt={`${patient.name}'s profile`}
                className="profile_picture"
              />
              <div className="details">
                <div className="bolder">{patient.name}</div>
                <div className="desc">
                  {patient.gender}, {patient.age}
                </div>
              </div>
            </div>
            <img className="dots" src="dots.png" alt="Options" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
