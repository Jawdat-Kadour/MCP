import React from 'react';
import PropTypes from 'prop-types';
import '@styles/globals.css';

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

Application.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Application;
