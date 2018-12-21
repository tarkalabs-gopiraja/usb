import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30
        }}
      >
        <Link to="/">Logo</Link>
        <div>
          <Link to="/signin">Sign in</Link>
          <br />
          <Link to="/signup">Sign up</Link>
          <br />
          <Link to="/dashboard/dashboard-with-data">dashboard with data</Link>
          <br />
          <Link to="/create">Create</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
