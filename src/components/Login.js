import React, { Component } from 'react'
import OtpInput from 'react-otp-input';
import {  toast } from 'react-toastify';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            otp: '',
            showPass:false,
            activeName:''
        }
    }

    inputCheck = otp => this.setState({ otp });
    showPass(name){
        this.setState({activeName:name, showPass:true})
    }
    loginCheck(){
        if(this.state.activeName === 'v1' && this.state.otp === '1111'){
            alert('Vishnu')
        }
        else if(this.state.activeName === 'v2' && this.state.otp === '2222'){
            alert('Vishuva')
        }
        else{
            toast("Invalid Login !", {position: "top-center"});
        }
    }
    render() {
        const {otp, showPass} = this.state
        return (
            <>
            <div className="loginImg" onClick={() => this.showPass('v1')}>
                <img src={process.env.PUBLIC_URL+"/images/v1.jpeg"} data-toggle="modal" data-target="#myModal" ref={input => this.v1 = input} alt='img' />
            </div> 
            <div className="loginImg" onClick={() => this.showPass('v2')}>
                <img src={process.env.PUBLIC_URL+"/images/v2.jpeg"} data-toggle="modal" data-target="#myModal" ref={input => this.v2 = input} alt='img' />
            </div> 
            {showPass && 
            <div className="modal fade modal-dialog-centered" id="myModal" role="dialog">
            <div id="form">
                   <OtpInput
                    onChange={this.inputCheck}
                    value={otp}
                    shouldAutoFocus={true}
                    separator={<span>-</span>}
                    />
                <button className="btn btn-primary btn-embossed" onClick={() => this.loginCheck()}>Enter</button>
            </div>
            </div>
            }
            </>
        )
    }
}
