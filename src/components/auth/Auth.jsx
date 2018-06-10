import React from 'react';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Spinner from '../helpers/Spinner';
import ErrorMessage from '../helpers/ErrorMessage';

const Auth = ({ handleLogin, logout, isLoading, errorMessage, emailValidationError, passwordValidationError }) => (
  <form style={styles.container} onSubmit={handleLogin}>
    <Input name='email' errorMessage={emailValidationError} />
    <Input name='password' type='password' errorMessage={passwordValidationError} />
    {errorMessage && <ErrorMessage text={errorMessage} />}
    <Button onClick={handleLogin} text='Login' type="submit" />
    {isLoading && <Spinner customStyle={{with: 250, height: 250}} />}
  </form>
);

export default Auth;

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  }
}
