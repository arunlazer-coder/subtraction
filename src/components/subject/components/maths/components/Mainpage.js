import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Validation from '../../../../../utils/Validator'

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: "",
      showAnswers: false,
      showList: false,
      answers: [],
    };
  }
  random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
  }

  getEquation(symbol) {
    var a = Math.floor(this.random(0, this.state.max));
    var b = Math.floor(this.random(0, this.state.max));
    const a1 = Math.max(a, b);
    const b1 = Math.min(a, b);
    let c = 0;
    switch (symbol) {
      case "-":
        c = a1 - b1;
        break;
      case "+":
        c = a1 + b1;
        break;
      case "*":
        c = a1 * b1;
        break;
      case "/":
        c = a1 / b1;
        break;
      default:
        break;
    }

    const answer = {
      c: c,
      d: a1 + symbol + b1,
    };
    return answer;
  }

  maxValue(value) {
    if(Validation.vaildNnumber(value)){
      this.setState({ max: value });
    }
  }

  show() {
    let answers = [];
    for (let i = 0; i < 10; i++) {
      answers.push(this.getEquation(this.props.symbol));
    }
    this.setState({ answers, showList: true });
  }

  saveAnswers = (e, index) => {
      let answers = this.state.answers
       answers[index] = {...answers[index], answerEntered: Validation.vaildNnumber(e.target.value) ? e.target.value : ""}
      this.setState({answers})
  };

  render() {
    const { max, showAnswers, showList, answers } = this.state;
    return (
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        {!showList ? (
          <Form
            maxValue={(value) => this.maxValue(value)}
            max={max}
            show={(e) => this.show(e)}
          />
        ) : (
          <>
            <div className="container-login100-form-btn mb-100">
              <div className="wrap-back100-form-btn">
                <div className="back100-form-bgbtn" />
                <button
                  className="login100-form-btn"
                  onClick={() =>
                    this.setState({
                      showAnswers: false,
                      showList: false,
                      max: "",
                      answerEnter:[]
                    })
                  }
                >
                  Go Back
                </button>
              </div>
            </div>

            <table className="table-fill">
              <thead>
                <tr>
                  <th className="text-left">Question</th>
                  <th className="text-left">Answer</th>
                </tr>
              </thead>

              <tbody className="table-hover">
                {answers.length > 0 &&
                  answers.map((item, index) => (
                    <tr key={index}>
                      <td key={index + 1} className="text-left bg-grey">
                        {item.d} 
                      </td>
                      <td key={index + 2} className="text-left bg-green">
                        {showAnswers ? (
                          item.answerEntered == item.c ? (
                          <>  <span className="correctAnswer">{item.answerEntered}</span><i class="fa fa-check correctAnswer float-right" aria-hidden="true"></i></>
                          ) : (
                           <> <span className="wrongAnswer">{item.answerEntered}</span><i class="fa fa-times wrongAnswer float-right" aria-hidden="true"></i></>
                          )
                        ) : (
                          <>
                          <input
                            type="text"
                            class="textfield"
                            value={item.answerEntered}
                            onChange={(e) => this.saveAnswers(e,index)}
                          />
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="container-login100-form-btn mt-100">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button
                  className="login100-form-btn"
                  onClick={() => this.setState({ showAnswers: true })}
                >
                  Show Answers
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <>
        <div className="container-login100-form-btn mb-100">
          <div className="wrap-back100-form-btn">
            <div className="back100-form-bgbtn" />
            <Link to="/practice/main/maths">
              <button className="login100-form-btn">Go Back</button>
            </Link>
          </div>
        </div>
        <form className="login100-form validate-form">
          <div className="wrap-input100 validate-input m-b-23">
            <span className="label-input100">Enter Maximum Number</span>
            <input
              className="input100"
              type="text"
              name="max"
              placeholder="Type your username"
              value={this.props.max}
              onChange={(e) => this.props.maxValue(e.target.value)}
            />
            <span className="focus-input100" data-symbol="" />
          </div>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button
                className="login100-form-btn"
                onClick={() => this.props.show()}
              >
                Show
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    symbol: state.currentAOP,
  };
};

export default connect(mapStateToProps, null)(Mainpage);