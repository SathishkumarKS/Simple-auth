import API from '../../api';

const AUTH_REQUEST = 'AUTH_REQUEST';
const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
const AUTH_REQUEST_FAILED = 'AUTH_REQUEST_FAILED';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

const initialState = {
  email: 'max@test.com',
  password: '12345',
  request: {
    inFlight: false,
    fetched: false,
    error: null
  }
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case AUTH_REQUEST:
      return {
        ...state,
        request: {
          ...initialState.request,
          inFlight: true
        }
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        data: payload,
        request: {
          ...initialState.request,
          fetched: true
        }
      };
    case AUTH_REQUEST_FAILED:
      return {
        ...state,
        password: initialState.password,
        request: {
          ...initialState.request,
          error: payload
        }
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload,
        request: {
          ...state.request,
          error: initialState.request.error
        }
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload,
        request: {
          ...state.request,
          error: initialState.request.error
        }
      };
    default:
      return state;
  }
}

export const login = () => async (dispatch, getState) => {
  try {
    console.info('USER LOGIN');

    dispatch(authRequest());

    const { email, password } = getState().auth;
    const user = await API.auth.login({email, password});

    console.info('USER LOGIN SUCCESS');

    dispatch(authRequestSuccess(user));
  } catch (error) {
    console.error('USER LOGIN FAILED', error);

    dispatch(authRequestFailed(error.message));
  }
};

const authRequest = () => ({
  type: AUTH_REQUEST
});

const authRequestSuccess = (user) => ({
  type: AUTH_REQUEST_SUCCESS,
  payload: user
});

const authRequestFailed = (error) => ({
  type: AUTH_REQUEST_FAILED,
  payload: error
});

export const logout = () => (dispatch) => {
  console.log('logout');
};

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  payload: password
});
