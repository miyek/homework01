import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import { fetchNews } from '../../store/news/news.actions';
import { LoaderWrapper, Header, SearchBar } from '../../components';
import { getNewsData, newsHasError, newsIsLoading } from '../../store/news/selector';
import NewsList from './components/NewsList';

// todo: handle router id param
/**
 * News container page
 * @param className
 * @returns {*}
 * @constructor
 */
const News = ({ className }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(newsIsLoading);
  const hasError = useSelector(newsHasError);
  const news = useSelector(getNewsData);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (<React.Fragment>
    <Header><SearchBar/></Header>
    <main className={className + '__main'}>
      <LoaderWrapper isLoading={isLoading}
                     hasError={hasError}>
        <NewsList news={news}/>
      </LoaderWrapper>
    </main>
  </React.Fragment>);
};

export default withTheme(styled(News)`
  &__main {
    background-color: ${props => props.theme.colors.lightenGray};
  }
`);
