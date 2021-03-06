import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SendPasswordForm extends Component {

  render() {
    const {asyncValidating, fields: {email}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
        <div className="row">

          <div className="main-login">

            <h3>Send password reset email</h3>
            <p>Enter your email below. We will send you a link to reset your password.</p>
            <form onSubmit={handleSubmit(this.props.sendEmail.bind(this))} role="form">
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
              <button type="submit" className="btn btn btn-primary">
                Send Email
              </button>
            </form>
            { this.props.user.emailError ?
              <div className="alert alert-danger" style={{marginTop: '20px'}}>
                <strong>Error</strong> The email and/or password provided are not correct. Please try again
              </div>
              :
              ''
            }
            { this.props.user.emailError === false ?
              <div className="alert alert-success" style={{marginTop: '20px'}}>
                <strong>Success</strong> The email was sent successfully.
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

export default SendPasswordForm;
