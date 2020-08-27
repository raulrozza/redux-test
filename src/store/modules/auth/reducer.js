import * as types from '../types';
import api from '../../../services/api';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.EDIT_REQUEST:
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.EDIT_FAILURE:
    case types.REGISTER_SUCCESS:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case types.EDIT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        },
        isLoading: false,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false,
      };

    case types.LOGIN_FAILURE:
      delete api.defaults.headers.Authorization;
      return initialState;

    default:
      return state;
  }
}
