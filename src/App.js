import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import Signin from "./auth/signin";
import Signup from "./auth/signup";
import Dashboard from "./project/dashboard";
import Navbar from "./commons/navbar";
import CreateProject from "./project/create";
import userJourney from "./project/userJourney";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ padding: 30 }}>
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={CreateProject} />
            <Route path="/user-journey" component={userJourney} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
