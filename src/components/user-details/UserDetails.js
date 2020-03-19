import React, { Component } from "react";
import "./user-details.style.css";

class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="user-container">
        <div className="navbar">
          Enter Personal Details <i className="fas fa-user-edit"></i>
          <form className="form">
            <input
              type="text"
              name="occupation"
              value={values.occupation}
              placeholder="Enter Your Occupation"
              onChange={handleChange("occupation")}
              required
            />
            <input
              type="text"
              name="city"
              value={values.city}
              placeholder="Enter Your City"
              onChange={handleChange("city")}
              required
            />
            <input
              type="text"
              name="bio"
              value={values.bio}
              placeholder="Enter Your Bio"
              onChange={handleChange("bio")}
              required
            />
            <input
              type="text"
              name="lifeMotto"
              value={values.lifeMotto}
              placeholder="Enter Your Life Motto"
              onChange={handleChange("lifeMotto")}
              required
            />
            <button onClick={this.continue}>Continue</button>
            <button onClick={this.back}>Back</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserDetails;
