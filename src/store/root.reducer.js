import { combineReducers } from 'redux';
import { news } from './news/reducer';
import { article } from './article/reducer';

const rootReducer = combineReducers({
  news,
  article
});

export default rootReducer;
