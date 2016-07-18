import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {pushState} from 'react-router';

export function requireAuthentication(Component) {

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
            if (this.props.isAuthenticated !== 'authenticated') {
                let redirectAfterLogin = this.props.location.pathname;
                this.context.router.push('/login');
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === 'authenticated'
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        status: state.user.status,
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
