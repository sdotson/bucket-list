import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {pushState} from 'react-router';


    class AuthenticatedComponent extends Component {
      static contextTypes = {
        router: PropTypes.object
      };

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
          console.log('this.props.authenticated',this.props.authenticated);
            if (this.props.authenticated !== true) {
                let redirectAfterLogin = this.props.location.pathname;
                this.context.router.push('/login');
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
