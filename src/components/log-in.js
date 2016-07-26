import LoginForm from './login-form.js';
import {signInUser, signInUserSuccess, signInUserFailure, resetUserFields } from '../actions/users';
import { reduxForm } from 'redux-form';


//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter email';
    hasErrors = true;
  }
  if(!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
   return hasErrors && errors;
}

const validateAndLogInUser = (values, dispatch) => {

  return new Promise((resolve, reject) => {
   dispatch(signInUser(values))
    .then((response) => {
        let data = response.payload.data;

        if(response.payload.status != 200) {

          dispatch(signInUserFailure(response.payload));
           reject(data);
         } else {

          sessionStorage.setItem('jwtToken', response.payload.data.token);

          if (values.rememberme) {
            localStorage.setItem('email', values.email);
          } else {
            localStorage.removeItem('email');
          }
          
          dispatch(signInUserSuccess(response.payload));
          resolve();
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   signInUser: validateAndLogInUser
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    error: state.user.error
  };
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password', 'rememberme'],
  initialValues: {
    email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
    password: '',
    rememberme: localStorage.getItem('email') !== null ? true : false
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(LoginForm);
