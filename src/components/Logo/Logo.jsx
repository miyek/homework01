import React from 'react';
import styled from 'styled-components';

const Logo = ({className}) => {
  return (
    <div className={className}>
      LOGO
    </div>
  );
};

export default styled(Logo)`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 10px 20px;
`;
