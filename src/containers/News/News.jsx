import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import { fetchNews } from '../../store/news/news.actions';
import { LoaderWrapper, Header, SearchBar } from '../../components';
import { getNewsArticles, getNewsTotal, newsHasError, newsIsLoading } from '../../store/news/selector';
import NewsList from './components/NewsList';
import Pagination from '../../components/Pagination/Pagination';

let interval;

/**
 * News container page
 * @param className
 * @returns {*}
 * @constructor
 */
const News = ({className}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(newsIsLoading);
  const hasError = useSelector(newsHasError);
  const news = useSelector(getNewsArticles);
  const total = useSelector(getNewsTotal);

  const [currentPage, changePage] = useState(1);
  const [searchText, updateSearchText] = useState(null);

  const onSearch = (text) => {
    updateSearchText(text);
    changePage(1);
    dispatch(fetchNews(text));

    if (interval) {
      clearInterval(interval);
    }
    setRefresh(text, currentPage);
  };

  const handlePageChange = (page) => {
    if (currentPage === page) {
      return false;
    }
    changePage(page);
    dispatch(fetchNews(searchText, page));

    // reset timeout
    clearInterval(interval);
    setRefresh(searchText, page);
  };

  const setRefresh = (text, page) => {
    interval = setInterval(() => {
      dispatch(fetchNews(text, page));
    }, 30000);
  };

  return (<React.Fragment>
    <Header><SearchBar onSearch={onSearch}/></Header>
    <main className={className + '__main'}>
      <LoaderWrapper isLoading={isLoading}
                     hasError={hasError}>
        {news.length ?
          <React.Fragment>
            <NewsList news={news}/>
            <Pagination total={total}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}/>
          </React.Fragment> :
          <section className={className + '__no-results'}>No results.</section>}
      </LoaderWrapper>
    </main>
  </React.Fragment>);
};

export default withTheme(styled(News)`
  &__main {
    padding: 20px;
    background-color: ${props => props.theme.colors.lightenGray};
  }
  
  &__no-results {
    text-align: center;
    font-size: 1.2rem;
  }
`);
