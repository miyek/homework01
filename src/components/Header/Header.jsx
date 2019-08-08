import React from 'react';
import styled, { withTheme } from 'styled-components';

import Logo from '../Logo/Logo';

const Header = ({className, children}) => {
  return (
    <header className={className}>
      <Logo className={className + '__logo'}/>
      <div className={className + '__children'}>
        {children}
      </div>
    </header>
  );
};

export default withTheme(styled(Header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.gray};
  border-bottom: solid 10px ${props => props.theme.colors.lightGray};
  
  @media (min-width: ${props => props.theme.sizes.small}) {
    flex-direction: row;
    height: 80px;
    
    &__logo {
      width: 20%;
    }
    
    &__children {
      width: 60%
    }
  }
`);
