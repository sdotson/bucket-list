import {
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE,
	SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
	LOGOUT_USER,
	SEND_EMAIL,
	SEND_EMAIL_SUCCESS,
	SEND_EMAIL_FAILURE,
	RESET_PASSWORD,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_FAILURE,
	RESET_USER
} from '../actions/users';

let token = sessionStorage.getItem('jwtToken'),
	authenticated = token ? true : false;

const INITIAL_STATE = {user: null, authenticated: authenticated, registered: false, error:null, emailError: null, passwordError: null};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case SIGNUP_USER:// sign up user, set loading = true and status = signup
      return { ...state, user: null, authenticated:false};
    case SIGNUP_USER_SUCCESS://return user, status = authenticated and make loading = false
      return { ...state, user: action.payload.data.user, authenticated: false, registered: true, error:null}; //<-- authenticated
    case SIGNUP_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, user: null, authenticated:false, error:error};


    case SIGNIN_USER:// sign in user,  set loading = true and status = signin
      return { ...state, user: null, authenticated:false, error:null};
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
      return { ...state, user: action.payload.data, authenticated: true, error:null}; //<-- authenticated
    case SIGNIN_USER_FAILURE:// return error and make loading = false
      error = action.payload.data || {message: action.payload.message};
      return { ...state, user: null, authenticated: false, error:error};

    case LOGOUT_USER:
      return {...state, user:null, authenticated: false, error:null};

		case SEND_EMAIL:
			return {...state, emailError:null};
		case SEND_EMAIL_SUCCESS:
			return {...state, emailError:false};
		case SEND_EMAIL_FAILURE:
			error = action.payload.data || {message: action.payload.message};
			return {...state, emailError:error};

		case RESET_PASSWORD:
			return {...state, passwordError: null};
		case RESET_PASSWORD_FAILURE:
			error = action.payload.data || {message: action.payload.message};
			return {...state, passwordError: error};
		case RESET_PASSWORD_SUCCESS:
			return {...state, passwordError: false};

		case RESET_USER:
			return {...state, passwordError:null, emailError:null, error: null}

    default:
      return state;
  }
}
