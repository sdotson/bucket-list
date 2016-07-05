import React, { Component } from 'react';

export default class NewItem extends Component {
  render() {
    return (
      <div>
        <form action="#">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" name="title" />
          </div>
          <div className="form-group">
            <textarea name="description" className="form-control" placeholder="Put the description of the item here."></textarea>
          </div>
          <div className="form-group row">
            <div className="col-md-4">
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Travel
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Creativity
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Health
              </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Career
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Family
              </label>
              </div>
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Adventure
              </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkbox">
              <label>
              <input type="checkbox" value="" name="categories" />Friendship
              </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
