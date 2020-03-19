import React, { Component } from "react";
import "./confirmation.style.css";

class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form //
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        firstName,
        lastName,
        age,
        email,
        occupation,
        city,
        bio,
        lifeMotto
      }
    } = this.props;
    return (
      <div className="user-container">
        <div className="navbar">
          Confirm User Data <i className="fas fa-user-edit"></i>
          <ul className="list">
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Age: {age} </li>
            <li> Email: {email}</li>
            <li>Occupation: {occupation}</li>
            <li>City: {city}</li>
            <li>Bio: {bio}</li>
            <li>Life Motto: {lifeMotto} </li>
          </ul>
          <button onClick={this.continue}>Confirm & Continue</button>
          <button onClick={this.back}>Back</button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
