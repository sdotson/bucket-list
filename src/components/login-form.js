import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.authenticated === true) {
      this.context.router.push('/my-bucket-list');
    }
  }

  render() {
    const {asyncValidating, fields: {email, password, rememberme}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
        <div className="row">

          <div className="main-login">

            <h3>Please log in, or <Link to="/register">register</Link></h3>
            <form onSubmit={handleSubmit(this.props.signInUser.bind(this))} role="form">
              <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
                <label>Email</label>
                <input value="user1@email.com" placeholder="user@email.com" type="text" className="form-control" {...email} />
                <div className="help-block">
                  {email.touched ? email.error : ''}
                </div>
                <div className="help-block">
                {asyncValidating === 'email' ? 'validating..': ''}
                </div>
              </div>
              <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
                <label>Password</label> <Link to="/send-password-email">(Reset password)</Link>
                <input value="password" type="password" className="form-control" {...password} />
                <div className="help-block">
                  {password.touched ? password.error : ''}
                </div>
              </div>
              <div className="checkbox pull-right">
                <label>
                  <input type="checkbox" {...rememberme} />
                  Remember me </label>
              </div>
              <button type="submit" className="btn btn btn-primary">
                Log In
              </button>
            </form>
            { this.props.user.error ?
              <div className="alert alert-danger" style={{marginTop: '20px'}}>
                <strong>Error</strong> The email and/or password provided are not correct. Please try again
              </div>
              :
              ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
