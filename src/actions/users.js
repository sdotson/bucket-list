import axios from 'axios';

//log out user
export const LOGOUT_USER = 'LOGOUT_USER';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const SEND_PASSWORD_EMAIL = 'SEND_PASSWORD_EMAIL';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

const ROOT_URL = 'http://192.241.148.238:3000/api';

export function signUpUser(formValues) {
  const request = axios.post(`${ROOT_URL}/users/register`, formValues);

  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}

export function sendEmailFailure(error) {
  return {
    type: SEND_EMAIL_FAILURE,
    payload: error
  };
}

export function sendEmailSuccess(data) {
  return {
    type: SEND_EMAIL_SUCCESS,
    payload: data
  };
}

export function signInUser(formValues) {
  const request = axios.post(`${ROOT_URL}/authenticate`, formValues);
  console.log('sign in attempt', formValues);
  return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  sessionStorage.removeItem('jwtToken');
  return {
    type: LOGOUT_USER
  };
}

export function sendPasswordEmail(formValues) {
  const request = axios.post(`${ROOT_URL}/users/password/reset`, formValues);

  return {
    type: SEND_PASSWORD_EMAIL,
    payload: request
  };
}

export function resetPassword(formValues) {
  const request = axios.put(`${ROOT_URL}/users/password`, formValues);

  return {
    type: RESET_PASSWORD,
    payload: request
  };
}

export function resetPasswordFailure(error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error
  };
}

export function resetPasswordSuccess(data) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data
  };
}
