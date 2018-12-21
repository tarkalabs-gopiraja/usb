import React from "react";

class Dashboard extends React.Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        Dashboard
        <p>{id}</p>
      </div>
    );
  }
}

export default Dashboard;
