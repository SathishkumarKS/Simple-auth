import React from 'react';
import { branch, renderNothing, withState, compose, withHandlers } from 'recompose';

const Spinner = ({ text, hideMe, customStyle }) => (
  <span onClick={hideMe} style={{...styles.errorMessage, ...customStyle}}>
    {text}
  </span>
);

const enhance = compose(
  withState('render', 'setRender', true),
  branch(
    (props) => !props.render,
    renderNothing
  ),
  withHandlers({
    hideMe: ({ setRender }) => () => {
      setRender(false);
    }
  })
);

export default enhance(Spinner);

const styles = {
  errorMessage: {
    fontSize: 12,
    color: 'red',
    textTransform: 'lowercase'
  }
}
