import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class AuthenticatedComponent extends Component {

    componentWillMount() {
        this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
        this.checkAuth();
    }

    checkAuth() {
      const token = sessionStorage.getItem('jwtToken');

      if (this.props.authenticated !== true) {
        browserHistory.push('login');
      }
    }

    render() {
        return (
            <div>
                {this.props.authenticated === true
                    ? this.props.children
                    : null
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(AuthenticatedComponent);
