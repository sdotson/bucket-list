import ResetPasswordForm from './reset-password-form.js';
import { resetPassword, resetPasswordSuccess, resetPasswordFailure } from '../actions/users';
import { reduxForm } from 'redux-form';


//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter email';
    hasErrors = true;
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Enter email';
    hasErrors = true;
  }
  // confirm that passwords match here
   return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const resetUserPassword = (values, dispatch) => {

  return new Promise((resolve, reject) => {
    console.log('values',values);
   dispatch(resetPassword(values.password))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(resetPasswordFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {

          //let other components know that we got user and things are fine by updating the redux` state
          dispatch(resetPasswordSuccess(response.payload));
          resolve();//this is for redux-form itself
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   resetUserPassword
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
  fields: ['password', 'confirmPassword'],
  initialValues: {
    password: '',
    confirmPassword: ''
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
