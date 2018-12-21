import React from "react";
import FieldSet from "../commons/FieldSet";

class Signin extends React.Component {
  state = {
    email: null,
    password: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <FieldSet
            label="Email"
            id="email"
            inputType="email"
            fn={this.handleChange}
          />
          <FieldSet
            label="Password"
            id="password"
            inputType="password"
            fn={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Signin;
