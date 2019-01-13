import React from "react";
import FieldSet from "../commons/FieldSet";

class CreateProject extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleUsl = e => {
    this.setState({
      userSegmentList: e.target.value.split("|")
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { userSegmentList } = this.state;
    console.log("userSegmentList", userSegmentList);

    return (
      <div>
        <h2>Create Project</h2>
        <form onSubmit={this.handleSubmit}>
          <FieldSet
            label="Project Name"
            id="project-name"
            inputType="text"
            fn={this.handleChange}
          />
          <FieldSet
            label="How this Domain / Industry works?"
            id="domain-industry"
            inputType="textarea"
            fn={this.handleChange}
          />
          <FieldSet
            label="What is the problem this product is trying to solve?"
            id="problem-solving"
            inputType="textarea"
            fn={this.handleChange}
          />
          <FieldSet
            label="List of User segments"
            id="userSegmentList"
            inputType="textarea"
            fn={this.handleUsl}
          />

          {userSegmentList &&
            userSegmentList.map((key, i) => {
              return (
                <div key={i}>
                  <h3>User Segment : {key}</h3>
                  <FieldSet
                    label="What will influence the user to search for this product?"
                    id="us1-influence"
                    inputType="textarea"
                    fn={this.handleChange}
                  />
                  <FieldSet
                    label="Persona"
                    id="us1-persona"
                    inputType="textarea"
                    fn={this.handleChange}
                  />
                </div>
              );
            })}

          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
