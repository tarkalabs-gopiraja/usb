import React, { Fragment} from "react";
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

const SubTree = ({
  Title,
  Type,
  Child
}) => {
  const hasChildren = Array.isArray(Child) && Child.length !==0
  return (
    <ul>
      <li>
        <p>
          {Title} : {Type}
        </p>
      </li>
      <li className={hasChildren ? "multiChild" : undefined}>
        {Child && Child.map((props, i) => <SubTree key={i} {...props} />)}
      </li>
    </ul>
  );
}

class userJourney extends React.Component {
  render() {
    return (
      <div className="userJourney">
        <h2>User Journey</h2>

        <ul>
          {Journey.map((data, i) => {
            const { Title, Type, Child } = data;
            const hasChildren = Array.isArray(Child) && Child.length !==0

            return (
              <Fragment key={i}>
                <li>
                  <p>
                    {Title} : {Type}
                  </p>
                </li>

                {hasChildren && (
                  <li className="multiChild">
                    {Child && Child.map((props, i) => 
                      <SubTree key={i} {...props} />
                    )}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default userJourney;
