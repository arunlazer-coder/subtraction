import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class Subject extends Component {
  render() {
    return (
      <div>
        <Col className="p-3">
          <button type="button" className="btn btn-primary btn-lg">
            English
          </button>
        </Col>
        <Col className="p-3">
          <Link to={`${this.props.location.pathname}/maths`}>
            <button type="button" className="btn btn-primary btn-lg">
              Maths
            </button>
          </Link>
        </Col>
      </div>
    );
  }
}
