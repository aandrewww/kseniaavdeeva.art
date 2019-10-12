import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'components/transition';

const wrapPageElement = ({ element, props }) => (
  <Transition
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  >
    {element}
  </Transition>
);

wrapPageElement.propTypes = {
  element: PropTypes.node,
  props: PropTypes.shape(),
};

wrapPageElement.defaultProps = {
  element: null,
  props: {},
};

export default wrapPageElement;
