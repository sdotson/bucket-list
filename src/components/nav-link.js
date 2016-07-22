import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
  static contextTypes = {
      router: React.PropTypes.object
  }

  render() {
    let isActive = this.context.router.isActive(this.props.to, true),
    className = isActive === true ? "active" : "";

    return (
      <li className={className}>
        <Link {...this.props}>{this.props.children}</Link>
      </li>
    );
  }
}
