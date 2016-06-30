import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <ul className="list-group">
      <li className="list-group-item clearfix">
      <h4 className="pull-left">Bucket List Item One - Closed</h4>
      <div className="btn-group pull-right">
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-remove"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-ok"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-chevron-down"></span>
      </button>
      </div>
      </li>
      <li className="list-group-item clearfix active">
      <div className="clearfix">
      <h4 className="pull-left">Bucket List Item One - Open</h4>
      <div className="btn-group pull-right">
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-remove"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-ok"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-chevron-up"></span>
      </button>
      </div>
      </div>
      <hr />
      <div>
      <h5>Description/Notes</h5>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem vero ab molestiae provident, culpa veniam assumenda quam autem non unde perferendis tempora perspiciatis porro placeat iure tenetur, molestias quis nisi.
      </p>
      <p>
      Added February 2, 2015.
      </p>
      </div>
      <hr />
      <h5>Categories</h5>
      <span className="label label-default">Default</span>
      <span className="label label-default">Default</span>
      <span className="label label-default">Default</span>
      </li>
      <li className="list-group-item clearfix">
      <h4 className="pull-left">Bucket List Item One - Closed</h4>
      <div className="btn-group pull-right">
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-remove"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-ok"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" className="btn btn-default">
      <span className="glyphicon glyphicon-chevron-down"></span>
      </button>
      </div>
      </li>
      </ul>
    );
  }
}
