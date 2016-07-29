import React from 'react';
import { Link } from 'react-router';

import List from './list';

export default (props) => {
  return (
    <div>
      <h1 className="page-header">Completed Items</h1>
      <p><Link to="my-bucket-list">Return to main bucket list</Link></p>
      <List filter={ {completed: true} } />
    </div>
  );
}
