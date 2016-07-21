import React, { Component, PropTypes } from 'react';
import { signUpUser, signUpUserSuccess, signUpUserFailure, signInUser, signInUserSuccess } from '../actions/users';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import RegisterForm from './register-form';

const validateAndLogInUser = (values, dispatch) => {

return new Promise((resolve, reject) => {

 dispatch(signUpUser(values))
  .then((response) => {
      let data = response.payload.data;
      //if any one of these exist, then there is a field error
      if(response.payload.status != 201) {
        //let other components know of error by updating the redux` state
        dispatch(signUpUserFailure(response.payload));
         reject(data); //this is for redux-form itself
       } else {
        //let other components know that we got user and things are fine by updating the redux` state
        dispatch(signInUser(values))
        .then((response) => {
            let data = response.payload.data;
            //if any one of these exist, then there is a field error
            if(response.payload.status != 200) {
              //let other components know of error by updating the redux` state
              dispatch(signInUserFailure(response.payload));
               reject(data); //this is for redux-form itself
             } else {
              //store JWT Token to browser session storage
              //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
              //sessionStorage = persisted only in current tab
              sessionStorage.setItem('jwtToken', response.payload.data.token);
              //let other components know that we got user and things are fine by updating the redux` state
              dispatch(signInUserSuccess(response.payload));
              resolve();//this is for redux-form itself

            }
          });
        // resolve();//this is for redux-form itself
      }
    });
  });
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
   signUpUser: validateAndLogInUser
  }
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'RegisterForm',
  fields: ['email', 'password'],
  initialValues: {
    email: 'user1@email.com',
    password: 'password'
  },
  null
}, mapStateToProps, mapDispatchToProps)(RegisterForm);
