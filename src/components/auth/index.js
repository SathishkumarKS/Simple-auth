import { connect } from 'react-redux'
import { login, logout, changeEmail, changePassword } from './state';
import Auth from './Auth';

const stateMap = ({ auth }) => ({
  isLoading: auth.request.inFlight,
  email: auth.email,
  password: auth.password,
  errorMessage: auth.request.error
});

const dispatchMap = (dispatch) => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  changeEmail: (email) => dispatch(changeEmail(email)),
  changePassword: (password) => dispatch(changePassword(password))
});

export default connect(stateMap, dispatchMap)(Auth);
