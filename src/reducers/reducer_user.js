
import {
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE,
	SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
	LOGOUT_USER
} from '../actions/users';

let token = sessionStorage.getItem('jwtToken');

let authenticated = false;

const INITIAL_STATE = {user: null, authenticated: authenticated, registered: false, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case SIGNUP_USER:// sign up user, set loading = true and status = signup
			console.log('signup user');
      return { ...state, user: null, authenticated:'signup', error:null, loading: true};
    case SIGNUP_USER_SUCCESS://return user, status = authenticated and make loading = false
			console.log('signup success', action.payload.data.user);
      return { ...state, user: action.payload.data.user, authenticated: false, registered: true, error:null, loading: false}; //<-- authenticated
    case SIGNUP_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, user: null, authenticated:'signup', error:error, loading: false};


    case SIGNIN_USER:// sign in user,  set loading = true and status = signin
      return { ...state, user: null, authenticated:'signin', error:null, loading: true};
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
			console.log('signin success', action.payload.data);
      return { ...state, user: action.payload.data, authenticated: true, error:null, loading: false}; //<-- authenticated
    case SIGNIN_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, user: null, authenticated: false, error:error, loading: false};

    case LOGOUT_USER:
      return {...state, user:null, authenticated: false, error:null, loading: false};

    default:
      return state;
  }
}
