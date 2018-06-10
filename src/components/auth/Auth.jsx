import React from 'react';
import { withHandlers } from 'recompose';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Spinner from '../helpers/Spinner';
import ErrorMessage from '../helpers/ErrorMessage';

const Auth = ({ login, logout, changeEmail, changePassword, age, changeAge, email, password, isLoading, errorMessage }) => (
  <div style={styles.container}>
    <Input value={email} onChange={changeEmail} onEnter={login} />
    <Input value={password} onChange={changePassword} onEnter={login} type='password' />
    {errorMessage && <ErrorMessage text={errorMessage} />}
    <Button onClick={login} text='Login' />
    {isLoading && <Spinner customStyle={{with: 250, height: 250}} />}
  </div>
);

export default withHandlers({
  changeEmail: ({ changeEmail, isLoading }) => (value) => {
    if (!isLoading) {
      changeEmail(value);
    }
  },
  changePassword: ({ changePassword, isLoading }) => (value) => {
    if (!isLoading) {
      changePassword(value);
    }
  },
  login: ({ login, isLoading }) => () => {
    if (!isLoading) {
      login();
    }
  },
  logout: ({ logout, isLoading }) => () => {
    if (!isLoading) {
      logout();
    }
  }
})(Auth);

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  }
}
