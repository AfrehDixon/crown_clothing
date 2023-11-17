import React, { Component } from "react";
import Forminput from "../FormInput/Forminput";
import "./sign.scss";
import CustomButton from "./CustomButton";

import { signInWithGoogle } from "../../firbaseutils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have na account</h2>
        <span>Sign in with email or password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <Forminput
            type="email"
            value={this.state.email}
            name="email"
            label="Email"
            required
            handleChange={this.handleChange}
          />

          <Forminput
            type="password"
            value={this.state.password}
            name="password"
            required
            label="password"
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle}> {' '} Sign in with Google {' '} </CustomButton>
        </form>
      </div>
    );
  }
}
