import ResetPasswordForm from './reset-password-form.js';
import { resetPassword, resetPasswordSuccess, resetPasswordFailure } from '../actions/users';
import { reduxForm } from 'redux-form';


//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Enter password';
    hasErrors = true;
  }
  // confirm that passwords match here
  console.log('hasErrors', hasErrors && errors);
   return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const resetUserPassword = (values, dispatch) => {
  console.log('resetUser function fired');
  console.log(resetPassword);
  return new Promise((resolve, reject) => {
    console.log('token', values.token);
   return dispatch(resetPassword(values, values.token))
    .then((response) => {
        let data = response.payload.data;
        console.log('data', data);
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(resetPasswordFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
          dispatch(resetPasswordSuccess(response.payload));
          resolve();//this is for redux-form itself
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   resetUserPassword: resetUserPassword
 };
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    error: state.user.error
  };
}

export default reduxForm({
  form: 'ResetForm',
  fields: ['password', 'confirmPassword', 'token'],
  initialValues: {
    password: '',
    confirmPassword: '',
    token: ''
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
