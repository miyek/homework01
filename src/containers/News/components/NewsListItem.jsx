import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../../shared';
import { ArticleItemShort } from '../../../components';
import { articleSave } from '../../../store/article/article.actions';

export const NewsListItem = ({className, item, history}) => {
  const dispatch = useDispatch();

  const goToArticle = () => {
    dispatch(articleSave(item));
    history.push(ROUTES.ARTICLE);
  };

  return (<div className={className}>
    <ArticleItemShort item={item}/>
    {item.content && <button className={className + '__link'} onClick={goToArticle}>Details</button>}
  </div>);
};

export default withRouter(styled(NewsListItem)`
  padding: 10px 20px;
  border-bottom: solid 1px #CCCCCC;
  
  &__link {
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {
      text-decoration: none;
    }
  }
`);
