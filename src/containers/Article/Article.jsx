import React , { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import { ArticleItemShort } from '../../components';
import { getArticle } from '../../store/article/selector';
import { ROUTES } from '../../shared';
import { articleClear } from '../../store/article/article.actions';

/**
 * Article container page
 * @param className
 * @param id
 * @returns {*}
 * @constructor
 */
const Article = ({ className, history }) => {
  const dispatch = useDispatch();
  const articleItem = useSelector(getArticle);

  /**
   * Unmount component and dispatch action to clean article store branch
   */
  useEffect(() => {
    return () => {
      dispatch(articleClear());
    }
  }, []);

  if (!articleItem) {
    history.push(ROUTES.NEWS);
    return null;
  }

  return (<React.Fragment>
    <ArticleItemShort showButton={true} item={articleItem}/>
    <p className={className + '__content'}>{articleItem.content}</p>
    <div><img className={className + '__image'} src={articleItem.urlToImage} alt={articleItem.title}/></div>
  </React.Fragment>);
};

export default withRouter(withTheme(styled(Article)`
  &__content {
    line-height: 1.5rem;
  }
  
  &__image {
    max-width: 100%;
  }
`));
