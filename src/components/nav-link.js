import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <li>
      <Link {...props}  activeClassName="active">{props.children}</Link>
    </li>
  );
}
