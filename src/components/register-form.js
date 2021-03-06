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
      this.context.router.push('my-bucket-list');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.authenticated === true || nextProps.user.registered === true) {
      this.context.router.push('my-bucket-list');
    }
  }

  render() {
    const {asyncValidating, fields: {email, password}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
        <div className="row">

          <div className="main-login">

            <h3>Register</h3>
            <form onSubmit={handleSubmit(this.props.signUpUser.bind(this))} role="form">
              <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
                <label>Email</label>
                <input value="user1@email.com" placeholder="user@email.com" type="text" className="form-control" {...email} />
                <div className="help-block">
                  {email.touched ? email.error : ''}
                </div>
              </div>
              <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
                <label>Password</label>
                <input value="password" type="password" className="form-control" {...password} />
                <div className="help-block">
                  {password.touched ? password.error : ''}
                </div>
              </div>
              <button type="submit" className="btn btn btn-primary">
                Register
              </button>
            </form>
            { this.props.user.error ?
              <div className="alert alert-danger" style={{marginTop: '20px'}}>
                <strong>Error</strong> This email already has an account. Try logging in or resetting your password.
              </div>
              : '' }
          </div>
        </div>
      </div>

    );
  }
}
