import React from 'react';
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { compose, setPropTypes, withHandlers, defaultProps, branch } from 'recompose';
import withPassword from './withPassword';
import withError from './withError';

const Input = ({ name, type, customStyle }) => (
  <Field
    name={name}
    component="input"
    type={type}
    style={{...styles, ...customStyle}}
  />
);

const enhance = compose(
  setPropTypes({
    type: PropTypes.string,
    customStyle: PropTypes.object
  }),
  defaultProps({
    type: 'text'
  }),
  withHandlers({
    onKeyPress: ({ onEnter }) => ({ key }) => {
      if (key === 'Enter') onEnter();
    }
  }),
  branch(
    (props) => props.type === 'password',
    withPassword
  ),
  withError
);

export default enhance(Input);

const styles = {
  input: {
    padding: 2,
    borderRadius: 4,
    outline: 'none'
  }
}
