import React from 'react';
import styled, { withTheme } from 'styled-components';

const LayoutWrapper = ({ className, children }) => {
  return (<div className={className}>{children}</div>)
};

export default withTheme(styled(LayoutWrapper)`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.large};
  padding: 0 10px;
`);
