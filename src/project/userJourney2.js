import React, { Fragment} from "react";
import "../assets/css/userJourney.css";
import ReactQuill from 'react-quill';
import {parse} from 'himalaya'

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
      {hasChildren && <li className={"multiChild"}>
        {Child && Child.map((props, i) => <SubTree key={i} {...props} />)}
      </li>}
    </ul>
  );
}

class userJourney2 extends React.Component {
  state = {};

  handleText = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  modules = {
    toolbar: [
      [{'list': 'ordered'}, {'list': 'bullet'},],
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  render() {
    const { text } = this.state;
    const dataArray = parse(text);
    console.log("text", dataArray);
    if(dataArray[0] !== undefined) {
      let arrayChildren = dataArray[0]['children']
      for(var i=0; i < arrayChildren.length; i++) {
        if(arrayChildren[i]['children'] !== undefined) {
          if(arrayChildren[i]['attributes'].length > 0) {
            let intendationValue = arrayChildren[i]['attributes'][0]['value']
            console.log(arrayChildren[i]['children'][0]['content'], intendationValue.substr(10, intendationValue.length - 1))
          }
          else {
            console.log(arrayChildren[i]['children'][0]['content'], 0)
          }
        }
      }
      console.log('*********************');
    }

    return (
      <div className="journeyWrapper">
        <div className="userJourney" style={{padding:10}}>
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

        <div className="userJourneyText">
          <h1>#Project Name</h1>
          {/* <ul contentEditable="true" onInput={this.handleChange} onBlur={this.handleChange}>
                <li>Type here</li>
              </ul> */}

              {/* <FieldSet
                label="Project Name"
                id="project-name"
                inputType="text"
                fn={this.handleText}
              /> */}

            <ReactQuill value={this.state.text}
                  onChange={this.handleChange} modules={this.modules}
                  formats={this.formats}/>

          <button className="btn">Add another Journey</button>
        </div>

        <div className="secondaryText">
            <div>
              <h2>Questions</h2>
              <p>List out the possible question user had in mind when reach this step</p>
              <ul>
                <li>Type here</li>
              </ul>

              <h2>Feelings / Thinking</h2>
              <p>What might the user thinking at this step or How he/she might felt at this step?</p>
              <ul>
                <li>Type here</li>
              </ul>

              <h2>Pain Point</h2>
              <p>What are the Pain Points user might have at this point?</p>
              <ul>
                <li>Type here</li>
              </ul>

              <h2>Opportunity</h2>
              <p>What are the possible solutions we can give for solve above criterias?</p>
              <ul>
                <li>Type here</li>
              </ul>

            </div>
          

          
        </div>

      </div>
    );
  }
}

export default userJourney2;