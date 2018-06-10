import React from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick} style={styles.button} type='button' >
    {text}
  </button>
);

export default Button;

const styles = {
  button: {
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4
  }
}
