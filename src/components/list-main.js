import React from 'react';
import { Link } from 'react-router';

import List from './list';

export default (props) => {
  return (
    <div>
      <h1 className="page-header">My Bucket List</h1>
      <p><Link to="items/new"><span className="glyphicon glyphicon-plus"></span> Add New Item</Link></p>
      <List filter={ {completed: false} } />
    </div>
  );
}
