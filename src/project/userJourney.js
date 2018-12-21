import React from "react";
import "../assets/css/userJourney.css";

const action = "cta";
const page = "page";
const form = "form";
const field = "field";

const Journey = [
  { Title: "Searching on Google / Product hunt", Type: action },
  { Title: "Click on the link to visit product home page", Type: action },
  { Title: "Feature", Type: page },
  { Title: "Pricing", Type: page },
  {
    Title: "Signup",
    Type: form,
    Child: [
      {
        Title: "Success",
        Type: action,
        Child: [
          { Title: "Go back to email to verify", Type: action },
          { Title: "Click CTA from email", Type: action }
        ]
      },
      {
        Title: "Failure",
        Type: action,
        Child: [
          { Title: "Go back to email to verify", Type: action },
          { Title: "Click CTA from email", Type: action }
        ]
      }
    ]
  },
  { Title: "Visit to login page", Type: page },
  { Title: "Dashboard", Type: page },
  { Title: "Create project by entering name", Type: action },
  { Title: "Open project", Type: action },
  { Title: "How this domain works?", Type: field },
  {
    Title: "define problem this product trying to solve",
    Type: action
  },
  { Title: "Enter Info : List of user segment & persona", Type: field },
  { Title: "User story", Type: page },
  { Title: "US : Trigger", Type: field },
  { Title: "US : Journey 1", Type: field }
];

class userJourney extends React.Component {
  render() {
    return (
      <div className="userJourney">
        <h2>User Journey</h2>

        <ul>
          {Journey.map((data, i) => {
            const { Title, Type, Child } = data;
            return (
              <span key={i}>
                <li>
                  <p>
                    {Title} : {Type}
                  </p>
                </li>

                {Child && (
                  <li className="multiChild">
                    {Child.map((data, i) => {
                      const { Title, Type, Child } = data;
                      return (
                        <ul key={i}>
                          <li>
                            <p>
                              {Title} : {Type}
                            </p>
                          </li>

                          {Child && (
                            <li className="multiChild">
                              {Child.map((data, i) => {
                                const { Title, Type, Child } = data;
                                return (
                                  <ul key={i}>
                                    <li>
                                      <p>
                                        {Title} : {Type}
                                      </p>
                                    </li>

                                    {Child && (
                                      <li className="multiChild">
                                        {Child.map((data, i) => {
                                          const { Title, Type, Child } = data;
                                          return (
                                            <ul key={i}>
                                              <li>
                                                <p>
                                                  {Title} : {Type}
                                                </p>
                                              </li>

                                              {Child && (
                                                <li className="multiChild">
                                                  {Child.map((data, i) => {
                                                    const {
                                                      Title,
                                                      Type,
                                                      Child
                                                    } = data;
                                                    return (
                                                      <ul key={i}>
                                                        <li>
                                                          <p>
                                                            {Title} : {Type}
                                                          </p>
                                                        </li>
                                                      </ul>
                                                    );
                                                  })}
                                                </li>
                                              )}
                                            </ul>
                                          );
                                        })}
                                      </li>
                                    )}
                                  </ul>
                                );
                              })}
                            </li>
                          )}
                        </ul>
                      );
                    })}
                  </li>
                )}
              </span>
            );
          })}

          {/* {Object.keys(this.props.data).map(propKey => {
            <li key={propKey}>
              {this.props.data[propKey]}

              <ul>
                {Object.keys(this.props.data[propKey]).map(childPropKey => {
                  <li key={childPropKey}>
                    {this.props.data[propKey][childPropKey]}
                  </li>;
                })}
              </ul>
            </li>;
          })} */}
        </ul>

        {/* <ul>
          <li>
            <p>Trigger : Primary Influnce</p>
          </li>
          <li>
            <p>abcd</p>
          </li>
          <li>
            <p>abcd</p>
          </li>
          <li>
            <p>abcd</p>
          </li>
          <li>
            <p>abcd</p>
          </li>
          <li>
            <p>abcd</p>
          </li>
          <li className="multiChild">
            <ul>
              <li>
                <p>abcd</p>
              </li>
              <li>
                <p>abcd</p>
              </li>
              <li>
                <p>abcd</p>
              </li>
              <li>
                <p>abcd</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>abcd</p>
              </li>
              <li>
                <p>abcd</p>
              </li>
              <li className="multiChild">
                <ul>
                  <li>
                    <p>multiChild</p>
                  </li>
                  <li>
                    <p>abcd</p>
                  </li>
                  <li>
                    <p>abcd</p>
                  </li>
                  <li>
                    <p>abcd</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>multiChild</p>
                  </li>
                  <li>
                    <p>abcd</p>
                  </li>
                  <li>
                    <p>abcd</p>
                  </li>
                  <li>
                    <p>abcd</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>abcd</p>
              </li>
              <li>
                <p>abcd</p>
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default userJourney;
