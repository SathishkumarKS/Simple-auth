import React from 'react';
import { defaultProps } from 'recompose';

const Button = ({ onClick, text, type }) => (
  <button onClick={onClick} style={styles.button} type={type} >
    {text}
  </button>
);

export default defaultProps({
  type: 'button'
})(Button);

const styles = {
  button: {
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4
  }
}
