import * as actions from '../actions/login';

const initialState = {
  user: Meteor.user(),
  loginForm: {
      email: '',
      password: '',
  },
  errorReason: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
          return {
              ...state,
            user: Meteor.user()
          };
    case actions.USER_LOGIN_SUCCEEDED:
          return {
              ...state,
            user: Meteor.user(),
            errorReason: null
          };
    case actions.USER_LOGIN_FAILED:
          return {
              ...state,
            user: null,
            errorReason: action.errorReason
          };
      case actions.USER_LOGIN_IN_PROGRESS:
          return {
              ...state,
              loginForm: {
                  ...state.loginForm,
                  [action.fieldName]: action.newValue
                },
              errorReason: null
          };
      case actions.USER_LOGOUT:
          return {
              ...state,
              user: Meteor.user(),
              errorReason: null
          };
      case actions.USER_LOGOUT_SUCCESS:
          return {
              ...state,
              user: Meteor.user(),
              errorReason: null
          };
      case actions.USER_LOGOUT_FAILURE:
          return {
              ...state,
              user: Meteor.user(),
              errorReason: action.errorReason
          };
    default:
      return state;
  }
}
