import React from "react";
import "./ProfileDetails.css";

function ProfileDetails({ person }) {
  return (
    <div className="profile-details">
      <img src="profile.png" alt="Profile" className="profile-pic" />
      <div className="h">
        <h1>{person.name}</h1>
      </div>
      <div className="mini-content">
        <img src="BirthIcon.svg" alt="" />
        <div className="mini-right">
          <div>Date Of Birth</div>
          <div>
            <b>{person.date_of_birth}</b>
          </div>
        </div>
      </div>
      <div className="mini-content">
        {person.gender === "Female" ? (
          <img src="FemaleIcon.svg" alt="" />
        ) : (
          <img src="MaleIcon.svg" />
        )}
        <div className="mini-right">
          <div>Gender</div>
          <div>
            <b>{person.gender}</b>
          </div>
        </div>
      </div>
      <div className="mini-content">
        <img src="PhoneIcon.svg" alt="" />
        <div className="mini-right">
          <div>Contact Info</div>
          <div>
            <b>{person.phone_number}</b>
          </div>
        </div>
      </div>
      <div className="mini-content">
        <img src="PhoneIcon.svg" alt="" />
        <div className="mini-right">
          <div>Emergency Contacts</div>
          <div>
            <b>{person.emergency_contact}</b>
          </div>
        </div>
      </div>
      <div className="mini-content">
        <img src="InsuranceIcon.svg" alt="" />
        <div className="mini-right">
          <div>Insurance Provider</div>
          <div>
            <b>{person.insurance_type}</b>
          </div>
        </div>
      </div>
      <div className="mini-btn">Show All Information</div>
    </div>
  );
}

export default ProfileDetails;
