import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ResetPasswordForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const {asyncValidating, fields: {password, confirmPassword, token}, handleSubmit, submitting, user } = this.props;
    token.value = this.props.location.query.token;
    return (
      <div className="container">
        <div className="row">

          <div className="main-login">

            <h3>Choose New Password</h3>
            <form onSubmit={handleSubmit(this.props.resetUserPassword.bind(this))} role="form">
              <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
                <label>Password</label>
                <input type="password" className="form-control" {...password} />
                <div className="help-block">
                  {password.touched ? password.error : ''}
                </div>
              </div>
              <div className={`form-group ${confirmPassword.touched && confirmPassword.invalid ? 'has-error' : ''}`}>
                <label>Confirm Password</label>
                <input type="password" className="form-control" {...confirmPassword} />
                <div className="help-block">
                  {confirmPassword.touched ? confirmPassword.error : ''}
                </div>
                <input type="hidden" {...token} value={this.props.location.query.token} />
              </div>
              <button type="submit" className="btn btn btn-primary">
                Reset Password
              </button>
            </form>
            { this.props.user.passwordError ?
              <div className="alert alert-danger" style={{marginTop: '20px'}}>
                <strong>Error</strong> Your attempt to update your password failed. Please make sure you are logged in or that you clicked the correct link in your email.
              </div>
              :
              ''
            }
            { this.props.user.passwordError === false ?
              <div className="alert alert-success" style={{marginTop: '20px'}}>
                <strong>Error</strong> Your password was changed successfully.
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

export default ResetPasswordForm;
