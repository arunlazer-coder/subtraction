import React, { Component } from 'react'

export default class Subraction extends Component {
    constructor(props){
        super(props)
        this.state = {
          max:0,
          showAnswers:false,
          showList:false,
          answers:[],
        }
      }
      random(mn, mx) {  
          return Math.random() * (mx - mn) + mn;  
      }  
    
      getEquation(symbol) {
        var a  = Math.floor(this.random(0, this.state.max));
        var b  = Math.floor(this.random(0, this.state.max));
        const a1 = Math.max(a, b);
        const b1 = Math.min(a, b);
        const c = symbol === '-' ? a1-b1 : a1+b1;
        
        const answer = {
                "c"  : c,
                "d"  : a1+symbol+b1,
        };
        return  answer;
      }
      
      maxValue(value){
        this.setState({"max":value})
      }

      show(symbol) {
        let answers = []
        for (let i = 0; i < 10; i++) {
          answers.push(this.getEquation(symbol))
        };
          this.setState({answers,showList:true})
       }

    render() {
        const { max, showAnswers, showList, answers } = this.state
        return (
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            {!showList ?
              <Form maxValue={(value) => this.maxValue(value)} max={max} show={(e) => this.show(e)}/>
              :
              <>
              <div className="container-login100-form-btn mb-100">
                  <div className="wrap-back100-form-btn">
                    <div className="back100-form-bgbtn" />
                    <button className="login100-form-btn" onClick={() => this.setState({showAnswers:false,showList:false, max:0})} >
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
                  {answers.length > 0 && answers.map((item, index) =>(
                     <tr key={index}>
                      <td key={index+1} className="text-left bg-grey">{item.d}</td>
                      <td key={index+2} className="text-left bg-green" >{showAnswers ? item.c : "-"}</td>
                    </tr>
                  )
                  )}

                </tbody>
                
                </table>  
                <div className="container-login100-form-btn mt-100">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn" onClick={() => this.setState({showAnswers:true})} >
                          Show Answers
                    </button>
                  </div>
                </div>
            </>
  
            }

            </div>
        )
    }
}


class Form extends Component {
  render() {
    return (
      <form className="login100-form validate-form" >
                <span className="login100-form-title p-b-49">
                  Vishnu & Vishuva 
                </span>
                <div className="wrap-input100 validate-input m-b-23" >
                  <span className="label-input100">Enter Maximum Number</span>
                  <input className="input100" type="text" name="max" placeholder="Type your username"  onChange={(e)=>this.props.maxValue(e.target.value)} />
                  <span className="focus-input100" data-symbol="" />
                </div>
                
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn mb-20" onClick={() => this.props.show('-')}>
                      Show Subractions
                    </button>
                    <button className="login100-form-btn" onClick={() => this.props.show('+')}>
                      Show Add
                    </button>
                  </div>
                </div>
              </form>
    )
  }
}




 // getPrimes() {
    //     var sieve = [], i, j, primes = [];
    //     for (i = 2; i <= this.state.max; ++i) {
    //         if (!sieve[i]) {
    //             primes.push(i);
    //             for (j = i << 1; j <= this.state.max; j += i) {
    //                 sieve[j] = true;
    //             }
    //         }
    //     }
    //     const ran_no = Math.floor(this.random(0, primes.length));
    
    //     return primes[ran_no];
    //    }