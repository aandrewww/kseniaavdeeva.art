import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size }) => (
  <Text as={as} size={size}>
    {children}
  </Text>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

Title.defaultProps = {
  as: '',
  size: 'large',
};

export default Title;
