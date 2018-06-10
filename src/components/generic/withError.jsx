import React from 'react';

export default (Component) => ({errorMessage, ...rest}) => (
  <span style={styles.container}>
    <Component {...rest} />
    <span style={styles.text}>{errorMessage}</span>
  </span>
);

const styles = {
  container: {
    position: 'relative'
  },
  text: {
    position: 'absolute',
    right: -100,
    top: 0,
    bottom: 0,
    flex: 0,
    width: 95,
    fontSize: 12,
    color: 'red',
    textTransform: 'lowercase'
  }
}
