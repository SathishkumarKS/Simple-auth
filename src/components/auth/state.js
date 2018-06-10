import API from '../../api';

const AUTH_REQUEST = 'AUTH_REQUEST';
const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
const AUTH_REQUEST_FAILED = 'AUTH_REQUEST_FAILED';

const initialState = {
  inFlight: false,
  fetched: false,
  error: null
};

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case AUTH_REQUEST:
      return {
        ...initialState,
        inFlight: true
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...initialState,
        fetched: true
      };
    case AUTH_REQUEST_FAILED:
      return {
        ...initialState,
        error: payload
      };
    default:
      return state;
  }
}

export const login = () => async (dispatch, getState) => {
  try {
    console.info('USER LOGIN');

    dispatch(authRequest());

    const { form: { authForm: { values: { email, password } } } } = getState();
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
