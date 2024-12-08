import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="./TestLogo.svg" alt="Tech.Care Logo" />
        </div>
      </div>
      <nav className="nav-menu">
        <a href="#overview" className="nav-item active">
          <img className="img-cls" src="home.png" alt="" />
          Overview
        </a>
        <a href="#patients" className="nav-item">
          <img className="img-cls" src="people.png" alt="" />
          Patients
        </a>
        <a href="#schedule" className="nav-item">
          <img className="img-cls" src="schedule.png" alt="" />
          Schedule
        </a>
        <a href="#message" className="nav-item">
          <img className="img-cls" src="msg.png" alt="" />
          Message
        </a>
        <a href="#transactions" className="nav-item">
          <img className="img-cls" src="payment.png" alt="" />
          Transactions
        </a>
      </nav>

      <div className="header-right">
        <div className="profile">
          <img src="doc.png" alt="Profile" className="doc-img" />
          <div className="profile-info">
            <div className="bold">Dr. Jose Simmons</div>
            <div className="desc">General Practitioner</div>
          </div>
        </div>
        <div className="setting">
          <img src="setting.png" alt="" className="img-cls" />
          <img src="dots.png" alt="" className="dots" />
        </div>
      </div>
    </header>
  );
};

export default Header;
