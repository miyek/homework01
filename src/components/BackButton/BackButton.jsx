import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const BackButton = ({ className, history }) =>
  (<button className={className} onClick={history.goBack}><span>&#8592;</span> Back</button>);

export default withRouter(styled(BackButton)`
  font-weight: 600;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  margin: 1px;
  
  &:hover {
    background: #F2f2f2;
  }
  
  span {
    font-size: 1.25rem;
  }
`);
