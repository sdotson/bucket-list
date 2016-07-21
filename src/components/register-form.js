import React, { Component, PropTypes } from 'react';
import {signInUser, signInUserSuccess, signInUserFailure, resetUserFields } from '../actions/users';
import { reduxForm } from 'redux-form';

class RegisterForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.authenticated === true) {
      this.context.router.push('/');
    }

    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    if(nextProps.user.authenticated === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message);
    }
  }

  render() {
    const {asyncValidating, fields: {email, password}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
      <form onSubmit={handleSubmit(this.props.signInUser.bind(this))}>

        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Email*</label>
          <input value="user1@email.com" placeholder="user@email.com" type="text" className="form-control" {...email} />
          <div className="help-block">
            {email.touched ? email.error : ''}
          </div>
          <div className="help-block">
          {asyncValidating === 'email' ? 'validating..': ''}
          </div>
        </div>


        <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Password*</label>
          <input value="password" type="password" className="form-control" {...password} />
          <div className="help-block">
            {password.touched ? password.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
      <p><Link to="/register">Register for an account</Link></p>

      </div>

    );
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
  form: 'RegisterForm',
  fields: ['email', 'password'],
  initialValues: {
    email: 'user1@email.com',
    password: 'password'
  },
  null
}, mapStateToProps)(RegisterForm);