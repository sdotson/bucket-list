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
   dispatch(sendPasswordEmail(values))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status != 200) {
        
          dispatch(sendEmailFailure(response.payload));
           reject(data);
         } else {
          dispatch(sendEmailSuccess(response.payload));
          resolve();
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
  form: 'SendEmailForm',
  fields: ['email'],
  initialValues: {
    email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''
  },
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(SendPasswordForm);
