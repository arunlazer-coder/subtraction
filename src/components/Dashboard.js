import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import ApexChart from "../utils/apexChart";
import { connect } from "react-redux";
import Login from "./Login";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: {},
    };
  }
  componentDidMount() {
    const that = this;
    axios
      .get(
        `https://vishnuvishuvaapi.herokuapp.com/public/api/maths?name=${this.props.loggedInUser}&getPercentage=true`
      )
      .then(function (response) {
        that.setState({ percentage: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const {percentage} = this.state
    if (!this.props.loggedInUser) {
      return <Login />;
    }
    return (
      <Container className="m-b-auto">
        <Col className="dashboardImageDiv">
          <div>
            <h1>
              <img
                src={`${process.env.PUBLIC_URL}/images/${this.props.loggedInUser}.jpeg`}
                height="300"
                width="200"
                alt="img"
              />
            </h1>
          </div>
        </Col>
        <table class="customTable">
              <thead>
                <tr>
                  <th>Matches Played</th>
                  <th>Wins</th>
                  <th>KD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{percentage.total}</td>
                  <td>{percentage.all}</td>
                  <td>{percentage.avg}</td>
                </tr>
              </tbody>
            </table>
        <Col className="p-5 m-l-60">
          <Link to="/practice/main">
           
            <img
              src={`${process.env.PUBLIC_URL}/images/enter.gif`}
              // onClick={}
              height="100"
              width="100"
              alt="img"
            />
          </Link>
        </Col>
        <Col>
          <div id="chart" className="bgwhite">
            <ApexChart />
          </div>
        </Col>
      </Container>
    );
  }
}
// Method to get Global state object
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

// Method to dispatch Actions

export default connect(mapStateToProps, null)(Dashboard);
