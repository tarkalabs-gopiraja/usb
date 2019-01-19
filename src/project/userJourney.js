import React, { Fragment} from "react";
import "../assets/css/userJourney.css";
import FieldSet from "../commons/FieldSet";

const action = "cta";
const page = "page";
const form = "form";
const field = "field";

const Journey = [
  { title: "Searching on Google / Product hunt", type: action },
  { title: "Click on the link to visit product home page", type: action },
  { title: "Feature", type: page },
  { title: "Pricing", type: page },
  {
    title: "Signup",
    type: form,
    child: [
      {
        title: "Success",
        type: action,
        child: [
          { title: "Go back to email to verify", type: action },
          { title: "Click CTA from email", type: action }
        ]
      },
      {
        title: "Failure",
        type: action,
        child: [
          { title: "Go back to email to verify", type: action },
          { title: "Click CTA from email", type: action }
        ]
      }
    ]
  },
  { title: "Visit to login page", type: page },
  { title: "Dashboard", type: page },
  { title: "Create project by entering name", type: action },
  { title: "Open project", type: action },
  { title: "How this domain works?", type: field },
  {
    title: "define problem this product trying to solve",
    type: action
  },
  { title: "Enter Info : List of user segment & persona", type: field },
  { title: "User story", type: page },
  { title: "US : Trigger", type: field },
  { title: "US : Journey 1", type: field }
];

const SubTree = ({
  title,
  type,
  child
}) => {
  const haschildren = Array.isArray(child) && child.length !==0
  return (
    <ul>
      <li>
        <p>
          {title} : {type}
        </p>
      </li>
      {haschildren && <li className={"multichild"}>
        {child && child.map((props, i) => <SubTree key={i} {...props} />)}
      </li>}
    </ul>
  );
}

const defaultStory = { title: null, tabIndex: null, child: null };

class userJourney extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      journey: [defaultStory, defaultStory],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.setStory(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.setStory(nextProps);
  }
  setStory = props => {
    if (props.story) {
      this.setState({
        journey: props.story,
      });
    }
  };

  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };

  handleChange(i, key, event) {
    if(event){
      const value = event.target.value;
      this.setValue(i, key, value);
    }
  }

  handleEnter(i, event){
    const code = event.keyCode || event.which;

    if(code === 13) {
      console.log("enter pressed");
      this.setState({
        journey: [...this.state.journey, defaultStory],
      });
    }
  }

  handleKeyPress(i, event){
    const code = event.keyCode || event.which;

    console.log("Press :", code);

    if (code === 9){
      console.log("Tab pressed");
    }

    if (code === 16 & 9){
      console.log("Shift Tab pressed");
    }
    
    if (code === 8){
      const currentNode = this.state.journey[i];
      if(currentNode.title.length === 0){
        event.preventDefault();
        this.setState({
          journey: [...this.state.journey.slice(0, i), ...this.state.journey.slice(i + 1)],
        });
      }
    }
  }

  setValue(i, key, value) {
    console.log(value);
    this.setState({
      journey: [
        ...this.state.journey.slice(0, i),
        {
          ...this.state.journey[i],
          [key]: value,
        },
        ...this.state.journey.slice(i + 1),
      ],
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this will be submitted: ', this.state.journey);
  }

  createField() {
    return this.state.journey.map((item, i) => {
      console.log("createField", item, i)
      return (
        <div key={i} style={{display:'flex'}}>
          <input 
            type="text"
            onChange={this.handleChange.bind(this, i, 'title')} 
            onKeyPress={this.handleEnter.bind(this, i)}
            onKeyDown={this.handleKeyPress.bind(this, i)}
            placeholder="Title" 
            value={item.title}
          />

          <input type="hidden" onChange={this.handleChange.bind(this, i, 'tabIndex')} />
        </div>
      );
    });
  }

  render() {
    console.log('this.state from render',this.state);
    const {journey} = this.state;

    return (
      <div className="journeyWrapper">
        <div className="userJourney" style={{padding:10}}>
          <h2>User Journey</h2>

          <ul>
            {journey.map((data, i) => {
              const { title, child } = data;
              const haschildren = Array.isArray(child) && child.length !==0

              return (
                <Fragment key={i}>
                  <li>
                    <p>
                      {title}
                    </p>
                  </li>

                  {haschildren && (
                    <li className="multichild">
                      {child && child.map((props, i) => 
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
          
          <form onSubmit={this.handleSubmit}>
            {this.createField()}

              <button className="btn" type="submit">Submit</button>
          </form>

          <button className="btn">Add another Journey</button>
        </div>

        <div className="secondaryText">
            <div>
              <h2>Questions</h2>
              <p>List out the possible question user had in mind when reach this step</p>
              <ul>
                <li>type here</li>
              </ul>

              <h2>Feelings / Thinking</h2>
              <p>What might the user thinking at this step or How he/she might felt at this step?</p>
              <ul>
                <li>type here</li>
              </ul>

              <h2>Pain Point</h2>
              <p>What are the Pain Points user might have at this point?</p>
              <ul>
                <li>type here</li>
              </ul>

              <h2>Opportunity</h2>
              <p>What are the possible solutions we can give for solve above criterias?</p>
              <ul>
                <li>type here</li>
              </ul>

            </div>
          

          
        </div>

      </div>
    );
  }
}

export default userJourney;