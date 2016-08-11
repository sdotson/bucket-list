import React, { Component, PropTypes } from 'react';
import { signUpUser, signUpUserSuccess, signUpUserFailure, signInUser, signInUserSuccess } from '../actions/users';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import RegisterForm from './register-form';

const validateAndLogInUser = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   return dispatch(signUpUser(values))
    .then((response) => {
      let data = response.payload.data;

      if(response.payload.status != 201) {
        dispatch(signUpUserFailure(response.payload));
         reject(data);
       } else {
        return dispatch(signInUser(values))
        .then((response) => {
          let data = response.payload.data;

          if(response.payload.status != 200) {

            dispatch(signInUserFailure(response.payload));
             reject(data);
           } else {
            sessionStorage.setItem('jwtToken', response.payload.data.token);

            dispatch(signInUserSuccess(response.payload));
            resolve();
          }
        });
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

export default reduxForm({
  form: 'RegisterForm',
  fields: ['email', 'password'],
  initialValues: {
    email: '',
    password: ''
  },
  null
}, mapStateToProps, mapDispatchToProps)(RegisterForm);
