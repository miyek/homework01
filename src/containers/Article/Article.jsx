import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { ArticleItemShort } from '../../components';

/**
 * Article container page
 * @param className
 * @param id
 * @returns {*}
 * @constructor
 */
const Article = ({ className, id }) => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(newsIsLoading);
  // const hasError = useSelector(newsHasError);
  // const news = useSelector(getNewsData);
  //
  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

  console.log(id);

  // todo: only mock
  const articleItem = {
    "source": {
      "id": null,
      "name": "Lifehacker.com"
    },
    "author": "Emily Price",
    "title": "Amazon Prime Student Members Can Get Music Unlimited for $.99",
    "description": "If you’re a college student with an Amazon Prime Student account, now you can add Amazon Music Unlimited to that membership for an additional $.99 a month. Read more...",
    "url": "https://lifehacker.com/amazon-prime-student-members-can-get-music-unlimited-fo-1837006285",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_X0CUFsB--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/lvpskwckeiafzmrqsgz3.jpg",
    "publishedAt": "2019-08-06T18:28:00Z",
    "content": "If youre a college student with an Amazon Prime Student account, now you can add Amazon Music Unlimited to that membership for an additional $.99 a month.\r\nExisting customers are able to just add the benefit on to their account, and students who havent tried … [+1215 chars]"
  };

  return (<React.Fragment>
    <ArticleItemShort item={articleItem}/>
    <p className={className + '__content'}>{articleItem.content}</p>
    <div><img className={className + '__image'} src={articleItem.urlToImage} alt={articleItem.title}/></div>
  </React.Fragment>);
};

export default withTheme(styled(Article)`
  &__content {
    line-height: 1.5rem;
  }
  
  &__image {
    max-width: 100%;
  }
`);
