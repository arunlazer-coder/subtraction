import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Col } from "reactstrap";
import Mainpage from './components/Mainpage';

class Maths extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect:false
    }
  }
  componentDidUpdate(prevProps) {
    if((this.props.currentAOP !== prevProps.currentAOP)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.setState({redirect:true})
    }
  } 

  render() {
    if(this.state.redirect){
    return <Redirect to={`${this.props.location.pathname}/someArithmatic`} />
    }
    return (
      <div>
      <Col className='p-3'>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.props.arithmatic('+')}> 
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </Col>
      <Col className='p-3'>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.props.arithmatic('-')}>
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
      </Col>
      <Col className='p-3'>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.props.arithmatic('*')}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </Col>
      <Col className='p-3'>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.props.arithmatic('/')}>
          /
        </button>
      </Col>
    </div>
    )
  }
}

const mapStateToProps=(state)=> {
  return {
    currentAOP: state.currentAOP
  };
}

// Method to dispatch Actions
const mapDispatchToProps = dispatch => ({
  arithmatic: (data) => dispatch({type:'arithmaticCheck', payload:data})
})
export default connect(mapStateToProps, mapDispatchToProps)(Maths)
