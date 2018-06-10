import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import { validate } from '../../helpers/validation';
import { login, logout } from './state';
import Auth from './Auth';

const stateMap = ({ auth : { error, inFlight }, form, form: { authForm: { values: { email, password } } } }) => ({
  email,
  password,
  isLoading: inFlight,
  errorMessage: error,
  emailValidationError: form.authForm.syncErrors && form.authForm.syncErrors.email,
  passwordValidationError: form.authForm.syncErrors && form.authForm.syncErrors.password
});

const dispatchMap = (dispatch) => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
});

const enhance = compose(
  reduxForm({
    form: 'authForm',
    validate,
    initialValues : {
      email: '',
      password: ''
    }
  }),
  connect(stateMap, dispatchMap),
  withHandlers({
    handleLogin: ({ login, isLoading, emailValidationError, passwordValidationError }) => (event) => {
      event && event.preventDefault();
      
      const preventLogin = isLoading || emailValidationError || passwordValidationError;

      if (!preventLogin) {
        login();
      }
    },
    logout: ({ logout, isLoading }) => () => {
      if (!isLoading) {
        logout();
      }
    }
  })
);

export default enhance(Auth);
