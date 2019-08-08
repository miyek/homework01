import { ARTICLE } from './actionTypes';

const INITIAL_STATE = null;

export function article(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARTICLE.clear:
      return null;
    case ARTICLE.save:
      return action.article;
    default:
      return state;
  }
}
