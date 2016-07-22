import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.authenticated === true) {
      this.context.router.push('/');
    }
  }

  render() {
    const {asyncValidating, fields: {email, password}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
      <h1 className="page-header">Login</h1>
      { this.props.user.error ?
        <div className="alert alert-danger">
          <strong>Error</strong> The email and/or password provided are not correct. Please try again
        </div>
        : '' }
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
      <p style={{paddingTop: '20px'}}><Link to="/register">Register for an account</Link></p>
      </div>

    );
  }
}

export default LoginForm;
