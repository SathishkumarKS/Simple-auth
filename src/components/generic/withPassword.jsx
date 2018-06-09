import React from 'react';
import { withState, compose } from 'recompose';
import icons from '../../assets/icons';

const withPassword = (Component) => ({passwordShown, showPassword, type, ...rest}) => (
  <div style={styles.container}>
    <Component {...rest} type={passwordShown ? 'text' : type} />
    <img
      onMouseDown={() => showPassword(true)}
      onMouseUp={() => showPassword(false)}
      onMouseLeave={() => showPassword(false)}
      src={passwordShown ? icons.eyeOpen : icons.eyeClose}
      alt='eye'
      style={styles.icon}
    />
  </div>
);

export default compose(
  withState('passwordShown', 'showPassword', false),
  withPassword
);

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block'
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
