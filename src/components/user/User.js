import React, { Component } from "react";
import "./user.style.css";

class User extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="user-container">
        <div className="navbar">
          Enter User Details <i className="fas fa-user-edit"></i>
          <form className="form">
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              placeholder="Enter Your First Name"
              onChange={handleChange("firstName")}
              required
            />
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              placeholder="Enter Your Last Name"
              onChange={handleChange("lastName")}
              required
            />
            <input
              type="number"
              name="age"
              value={values.age}
              min="1"
              placeholder="Enter Your Age"
              onChange={handleChange("age")}
              required
            />
            <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter Your Email"
              onChange={handleChange("email")}
              required
            />
            <button onClick={this.continue}>Continue</button>
          </form>
        </div>
      </div>
    );
  }
}

export default User;
