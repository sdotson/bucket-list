import React, { Component, PropTypes } from 'react';
import { signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

export default class RegisterForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    if(this.props.user.authenticated === true || this.props.user.registered === true) {
      this.context.router.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps.user);
    if(nextProps.user.authenticated === true || nextProps.user.registered === true) {
      this.context.router.push('/');
    }
  }

  render() {
    const {asyncValidating, fields: {email, password}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
      <h1 className="page-header">Register</h1>
      { this.props.user.error ?
        <div className="alert alert-danger">
          <strong>Error</strong> The email you provided already has an account. Try logging in or resetting your password.
        </div>
        : '' }
      <form onSubmit={handleSubmit(this.props.signUpUser.bind(this))}>

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
        <button type="submit" className="btn btn-primary"  disabled={submitting} >Register</button>
      </form>
      </div>

    );
  }
}
