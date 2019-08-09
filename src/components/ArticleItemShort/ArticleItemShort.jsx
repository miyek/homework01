import React from 'react';
import styled, { withTheme } from 'styled-components';
import * as moment from 'moment';

import { BackButton } from '../index';

export const ArticleItemShort = ({className, item, showButton}) => {
  return (<article className={className}>
    <h4>{showButton && <BackButton/>}{item.title}</h4>
    <ul>
      <li>{moment(item.publishedAt).format('DD.MM.YYYY HH:mm')}</li>
      <li>{item.source.name}</li>
      <li>{item.author}</li>
      <li><a href={item.url} title={item.title} target='_blank' rel="noopener noreferrer">link</a></li>
    </ul>
  </article>);
};

export default withTheme(styled(ArticleItemShort)`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  
    li {
      list-style: none;
    }
  }
  
  a {
    color: #000000;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
  
  @media (min-width: ${props => props.theme.sizes.small}) {
    ul {
      flex-direction: row;
    
      li {
        border-right: solid 1px #CCCCCC;
        padding: 0 15px;
        margin: 10px 0;
        
        &:first-child {
          padding-left: 0;
        }
        
        &:last-child {
          padding-right: 0;
          border-right: none;
        }
      }
    }
  }
`);
