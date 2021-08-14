import React, { Component } from 'react'
import Login from './components/Login';
// import Subraction from './components/Subraction';

export default class App extends Component {
  render() {
    return (
      <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
             <Login /> 
            {/* <Subraction /> */}
          </div>
       </div>

    )
  }
}
