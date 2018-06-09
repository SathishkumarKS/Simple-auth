import React from 'react';
import { withState, branch, renderComponent, compose, lifecycle } from 'recompose';
import Input from '../generic/Input';

const Auth = ({ login, logout, changeEmail, changePassword, age, changeAge, email, password, isLoading }) => {
  console.log(isLoading);
  return (
    <div style={styles.container}>
      <Input value={email} onChange={changeEmail} />
      <Input value={password} onChange={changePassword} type='password' />
      <button onClick={login}>Login</button>
      {age}
      <button onClick={() => changeAge(age + 1)}>+1</button>
    </div>
  );
};

const Spinner = () => (
  <div>
    SPINNER
  </div>
)

const enhance = compose(
  branch(
    props => props.isLoading,
    renderComponent(Spinner)
  ),
  lifecycle({
    componentDidMount() {
      console.log('mounted');
    }
  }),
  withState(
    'age',
    'changeAge',
    22
  )
);

export default enhance(Auth);

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start'
  }
}
