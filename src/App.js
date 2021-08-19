import React, { Component } from "react";
import Login from "./components/Login";
// import Subraction from './components/Subraction';
import Dashboard from "./components/Dashboard";
import Subject from "./components/subject";
import Maths from "./components/subject/components/maths";
import { default as Maths1 } from "./components/subject/components/maths/components/Mainpage";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="limiter">
          <Link to="/dashboard">
            <h1 className="appHeader">
              {this.props.loggedInUser === "v1"
                ? "Vishnu"
                : this.props.loggedInUser === "v2"
                ? "Vishuva"
                : "Practice"}
            </h1>
            {this.props.loggedInUser ? (
              <span
                className="float-right mr-3 font-weight-bold btn-danger"
                onClick={() => this.props.login("")}
              >
                <i class="fa fa-power-off fa-3x" aria-hidden="true"></i>
              </span>
            ) : (
              ""
            )}
          </Link>
          <div
            className="container-login100"
            style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
          >
            {!this.props.loggedInUser ? <Redirect to="/" /> : ""}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/practice/main" component={Subject} />
              <Route exact path="/practice/main/maths" component={Maths} />
              <Route
                exact
                path="/practice/main/maths/someArithmatic"
                component={Maths1}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch({ type: "login", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
