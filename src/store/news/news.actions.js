import { NEWS } from './actionTypes';
import { API_KEY, API_NEWS_URL } from '../../shared/api.constants';

export function newsError(hasError) {
  return {
    type: NEWS.error,
    hasError,
  }
}

export function newsLoading(isLoading) {
  return {
    type: NEWS.loading,
    isLoading,
  }
}

export function newsSuccess(data) {
  return {
    type: NEWS.success,
    data,
  }
}

export function fetchNews(searchText, page = 1) {
  return (dispatch) => {
    dispatch(newsLoading(true));

    fetch(`${API_NEWS_URL}${searchText}&page=${page}`, {headers: {'x-api-key': API_KEY}})
      .then((response) => {
        dispatch(newsLoading(false));
        if (response.status === 200) {
          return response;
        } else {
          dispatch(newsError(true));
        }
      })
      .then(response => response.json())
      .then((data) => dispatch(newsSuccess(data)))
      .catch(() => dispatch(newsError(true)));
  };
}
