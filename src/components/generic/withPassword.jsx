import React from 'react';
import { withState, compose, withHandlers } from 'recompose';
import icons from '../../assets/icons';

const withPassword = (Component) => ({passwordShown, showPassword, hidePassword, type, ...rest}) => (
  <span style={styles.container}>
    <Component {...rest} type={passwordShown ? 'text' : type} />
    <img
      onMouseDown={showPassword}
      onMouseUp={hidePassword}
      onMouseLeave={hidePassword}
      src={passwordShown ? icons.eyeOpen : icons.eyeClose}
      alt='eye'
      style={styles.icon}
    />
  </span>
);

export default compose(
  withState('passwordShown', 'setPassword', false),
  withHandlers({
    showPassword: ({ setPassword }) => () => {
      setPassword(true);
    },
    hidePassword: ({ setPassword }) => () => {
      setPassword(false);
    },
  }),
  withPassword
);

const styles = {
  container: {
    position: 'relative'
  },
  icon: {
    width: 14,
    height: 14,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto 4px',
    cursor: 'pointer'
  }
}
