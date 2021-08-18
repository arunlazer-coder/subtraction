import React, { Component } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { Col, Row, Modal } from "reactstrap";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      showPass: false,
      activeName: "",
      loggedIn: false,
    };
  }

  inputCheck = (otp) => this.setState({ otp });
  
  showPass = (name) => this.setState({ activeName: name, showPass: true });

  close = () => this.setState({ showPass: !this.state.showPass });
  
  loginCheck() {
    if ((this.state.activeName === "v1" && this.state.otp !== "1111") && (this.state.activeName === "v2" && this.state.otp !== "2222")) {
      toast("Invalid Login !", { position: "top-center" });
    } else {
      this.props.login(this.state.activeName)
      this.setState({ loggedIn: true, showPass: false });
    }
  }
  
  render() {
    const { otp, showPass } = this.state;
    const { close } = this;
    if (this.props.loggedInUser) {
     return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <div className="loginImg" onClick={() => this.showPass("v1")}>
          <img src={process.env.PUBLIC_URL + "/images/v1.jpeg"} alt="img" />
        </div>
        <div className="loginImg" onClick={() => this.showPass("v2")}>
          <img src={process.env.PUBLIC_URL + "/images/v2.jpeg"} alt="img" />
        </div>
        <Modal
          isOpen={showPass}
          toggle={close}
          backdrop={true}
          className="modal-dialog-centered loginModal"
        >
          <div id="form">
            <OtpInput
              onChange={this.inputCheck}
              value={otp}
              shouldAutoFocus={true}
              isInputNum={true}
              separator={<span>-</span>}
            />
            <Row className="ml-2">
              <Col>
                <button
                  className="btn btn-danger"
                  onClick={() => this.setState({ otp: "" })}
                >
                  Clear
                </button>
              </Col>
              <Col>
                <button
                  className="btn btn-primary btn-embossed"
                  onClick={() => this.loginCheck()}
                >
                  Enter
                </button>
              </Col>
            </Row>
          </div>
        </Modal>
      </>
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
const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch({type:'login', payload:data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)