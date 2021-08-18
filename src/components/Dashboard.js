import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import ApexChart from "../utils/apexChart";
import { connect } from "react-redux";
import Login from './Login'
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    if(!this.props.loggedInUser){
        return <Login />
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
        <Col className='p-5 m-l-60'>
          <Link to='/practice/main'>
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
const mapStateToProps=(state)=> {
  return {
    loggedInUser: state.loggedInUser
  };
}

// Method to dispatch Actions


export default connect(mapStateToProps, null)(Dashboard)