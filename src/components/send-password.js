import SendPasswordForm from './send-password-form.js';
import { sendPasswordEmail, sendEmailFailure, sendEmailSuccess } from '../actions/users';
import { reduxForm } from 'redux-form';


//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter email';
    hasErrors = true;
  }
   return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const sendEmail = (values, dispatch) => {

  return new Promise((resolve, reject) => {
    console.log('values',values);
   dispatch(sendPasswordEmail(values))
    .then((response) => {
        let data = response.payload.data;
        console.log('data', data);
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(sendEmailFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
          dispatch(sendEmailSuccess(response.payload));
          resolve();//this is for redux-form itself
        }
      });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
   sendEmail: sendEmail
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    error: state.user.error
  };
}

export default reduxForm({
  form: 'ResetForm',
  fields: ['email'],
  initialValues: {
    email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(SendPasswordForm);
