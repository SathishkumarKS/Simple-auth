import React from 'react';
import PropTypes from 'prop-types'
import { compose, setPropTypes, withHandlers, defaultProps, branch } from 'recompose';
import withPassword from './withPassword';

const Input = ({ value, onChange, type, customStyle, onKeyPress }) => (
  <input
    value={value}
    onChange={onChange}
    type={type}
    style={customStyle}
    onKeyPress={onKeyPress}
  />
);

const enhance = compose(
  setPropTypes({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    customStyle: PropTypes.object
  }),
  defaultProps({
    type: 'text'
  }),
  withHandlers({
    onChange: ({ onChange }) => ({ target }) => {
      onChange(target.value);
    },
    onKeyPress: ({ onEnter }) => ({ key }) => {
      if (key === 'Enter') onEnter();
    }
  }),
  branch(
    (props) => props.type === 'password',
    withPassword
  )
);

export default enhance(Input);
