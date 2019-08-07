import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../../../shared';
import { ArticleItemShort} from '../../../components';

// todo: styling this with screen
export const NewsListItem = ({className, item, id}) => {
  return (<div className={className}>
    <ArticleItemShort item={item}/>
    { item.content && <Link to={`${ROUTES.ARTICLE}/${id}`}>Details</Link>}
  </div>);
};

export default styled(NewsListItem)`
  padding: 10px 20px;
`;
