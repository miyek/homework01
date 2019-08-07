import React from 'react';
import PropTypes from 'prop-types';

const LoaderWrapper = ({ isLoading, hasError, children }) => {
  const loading = <div>Content is loading</div>;
  const error = <div>Error with loading data</div>;

  let content = loading;

  if (isLoading && !hasError) {
    content = loading;
  } else if (!isLoading && hasError) {
    content = error;
  } else {
    content = children;
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
};

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default LoaderWrapper;
