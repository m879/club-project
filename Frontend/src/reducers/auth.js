import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actions/types';
  

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  isSignup:localStorage.getItem('email')?true:false,
  isLoading: false,
  user: localStorage.getItem('user'),
  authId:localStorage.getItem('id'),
  authEmail:localStorage.getItem('email'),
  authCategory:localStorage.getItem('Category')
};
  
export default function (state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };

      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };

      case REGISTER_SUCCESS:
        console.log(action.payload);
        localStorage.setItem('user', action.payload);
        localStorage.setItem('id', action.payload.id);
        localStorage.setItem('email', action.payload.email);
        localStorage.setItem('Category', action.payload.category);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: false,
          isSignup:true,
          isLoading: false,
          user: action.payload,
          authId:action.payload.id,
          authEmail:action.payload.email,
          authCategory:action.payload.category
        };

      case LOGIN_SUCCESS:
          console.log(action.payload);
          localStorage.setItem('user', action.payload);
          localStorage.setItem('token', action.payload.accessToken);
          localStorage.setItem('id', action.payload.id);
          localStorage.setItem('email', action.payload.email);
          localStorage.setItem('Category', action.payload.category);
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload,
            authId:action.payload.id,
            authEmail:action.payload.email,
            authCategory:action.payload.category
          };

      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        // localStorage.removeItem('Category');
        console.log("LOGOUT SUCCESS");
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
          authId:null,
          authEmail:null,
          authCategory:null,
        };

       default:
        return state;
    }
}
  