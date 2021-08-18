// import { combineReducers } from 'redux';
// import LoginReducer from './reducer_login';

// const rootReducer = combineReducers({
//   login: LoginReducer
// })

// export default rootReducer;

const initState = {
  loggedInUser: "",
  currentAOP:'',
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'login'){
   let newPosts = action.payload
   return {
     ...state,
     loggedInUser:newPosts
   }
  }
  if(action.type === 'arithmaticCheck'){
    let newPosts = action.payload
    return {
      ...state,
      currentAOP:newPosts
    }
   }
  return state;
}

export default rootReducer