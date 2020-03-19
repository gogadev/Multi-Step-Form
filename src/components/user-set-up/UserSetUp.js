import React, { Component } from "react";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import Confirmation from "../confirmation/Confirmation";
import Success from "../success/Success";

import "./user-set-up.style.css";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      occupation: "",
      city: "",
      bio: "",
      lifeMotto: ""
    };
  }

  // Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go Back
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      age,
      email,
      occupation,
      city,
      bio,
      lifeMotto
    } = this.state;
    const values = {
      firstName,
      lastName,
      age,
      email,
      occupation,
      city,
      bio,
      lifeMotto
    };

    switch (step) {
      case 1:
        return (
          <User
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
