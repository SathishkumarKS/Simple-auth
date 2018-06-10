import React from 'react';
import icons from '../../assets/icons';

const Spinner = ({ customStyle }) => (
  <img src={icons.loading} alt='loading' style={customStyle} />
);

export default Spinner;
