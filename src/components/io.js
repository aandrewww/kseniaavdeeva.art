import React, { Component } from 'react';
import PropTypes from 'prop-types';

let io;
const listeners = [];

function getIO(rootMargin) {
  if (typeof io === 'undefined' && typeof window !== 'undefined' && window.IntersectionObserver) {
    io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          listeners.forEach((l) => {
            if (l[0] === entry.target) {
              // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                // io.unobserve(l[0]);
                l[1](true);
              } else if (!entry.isIntersecting || entry.intersectionRatio <= 0) {
                l[1](false);
              }
            }
          });
        });
      },
      { rootMargin }
    );
  }

  return io;
}

const listenToIntersections = (el, cb, rm) => {
  const iobservers = getIO(rm);
  iobservers.observe(el);
  listeners.push([el, cb]);

  return iobservers;
};

export default class IO extends Component {
  constructor() {
    super();

    // Always not visible while server rendering.
    this.state = {
      isVisible: false,
      hasBeenVisible: false,
      /* eslint-disable-next-line react/no-unused-state */
      IOSupported: false,
    };
  }

  async componentDidMount() {
    // Default values
    let isVisible = true;
    let hasBeenVisible = true;
    let IOSupported = false;

    // Intersection Observer polyfill
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      await import('intersection-observer').then(() => {
        // eslint-disable-next-line no-console
        console.log('IntersectionObserver polyfill injected.');
      });
    }

    // Check if browser (now) supports IntersectionObserver
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      isVisible = false;
      hasBeenVisible = false;
      IOSupported = true;
    }

    this.setState(
      {
        isVisible,
        hasBeenVisible,
        /* eslint-disable-next-line react/no-unused-state */
        IOSupported,
      },
      this.listenToIntersections
    );
  }

  componentWillUnmount() {
    this.io.disconnect();
  }

  listenToIntersections = () => {
    this.io = listenToIntersections(
      this.ref,
      (isVisible) => {
        this.setState((state) => {
          let newState = {};

          if (!state.hasBeenVisible && isVisible) {
            newState = { hasBeenVisible: true };
          }

          return { isVisible, ...newState };
        });
      },
      this.props.rootMargin
    );
  };

  handleRef = (ref) => {
    if (ref) {
      this.ref = ref;
    }
  };

  render() {
    const { isVisible, hasBeenVisible } = this.state;

    return <div ref={this.handleRef}>{this.props.children({ isVisible, hasBeenVisible })}</div>;
  }
}

IO.defaultProps = {
  rootMargin: '-50px',
};

IO.propTypes = {
  children: PropTypes.func.isRequired,
  rootMargin: PropTypes.string,
};
