import ResetPasswordForm from './reset-password-form.js';
import { resetPassword, resetPasswordSuccess, resetPasswordFailure } from '../actions/users';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

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

  if (values.confirmPassword !== values.password) {
    errors.passwordMatch = 'The passwords do not match';
    hasErrors = true;
  }
  // confirm that passwords match here
   return hasErrors && errors;
}

const resetUserPassword = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(resetPassword(values, values.token))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(resetPasswordFailure(response.payload));
           reject(data);
         } else {
          dispatch(resetPasswordSuccess(response.payload));
          browserHistory.push('/password-success');
          resolve();
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

function getUrlParam(param) {
  let arr = document.URL.match(/token=([\w0-9.\-_]+)/);
  return arr && arr[1];
}

export default reduxForm({
  form: 'ResetForm',
  fields: ['password', 'confirmPassword', 'token'],
  initialValues: {
    password: '',
    confirmPassword: '',
    token: getUrlParam('token')
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
