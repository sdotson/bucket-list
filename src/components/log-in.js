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

//For any field errors upon submission (i.e. not instant check)
const validateAndLogInUser = (values, dispatch) => {

  return new Promise((resolve, reject) => {

  console.log('submitted values:', values);
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
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
   signInUser: validateAndLogInUser
  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
  initialValues: {
    email: 'user1@email.com',
    password: 'password'
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(LoginForm);
