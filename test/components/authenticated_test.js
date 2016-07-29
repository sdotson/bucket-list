import { renderComponent , expect } from '../test_helper';
import AuthenticatedComponent from '../../src/components/authenticated-component';

function storageMock() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    length: function() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

describe('AuthenticatedComponent' , () => {
  let component;

  beforeEach(() => {
    let localStorage = storageMock();
    let sessionStorage = storageMock();
    console.log('sessionStorage', sessionStorage;

    component = renderComponent(AuthenticatedComponent);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
