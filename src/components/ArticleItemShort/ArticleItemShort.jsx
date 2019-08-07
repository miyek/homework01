import React from 'react';

// todo: styling this with screen
export const ArticleItemShort = ({item}) => {
  return (<article>
    <h4>{item.title}</h4>
    {/*// todo: format date*/}
    <small>{item.publishedAt}</small>
    <p>{item.source.name}</p>
    <p>{item.author}</p>
    {/*todo: add link*/}
    <p>{item.url}</p>
  </article>);
};

export default ArticleItemShort;
