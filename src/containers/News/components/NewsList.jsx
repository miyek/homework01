import React from 'react';

import NewsListItem from './NewsListItem';

export const NewsList = ({news}) => {
  const newsList = news.map((item, index) =>
    (<NewsListItem key={index} item={item}/>));
  return (<section>{newsList}</section>);
};

export default NewsList;
